import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, SpinnerIcon } from './icons';
import { GoogleGenAI, Modality } from "@google/genai";

// --- Audio Decoding Helpers from Gemini Docs ---
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// --- Component ---

interface AudioPlayerProps {
  title: string;
  waveformColor: string;
  buttonColor: string;
  textColor: string;
  flowType: 'rise' | 'rest';
  intentions: {
    energy?: string;
    emotion?: string;
    victory?: string;
    release?: string;
  };
}

const WaveformBar: React.FC<{ height: number; color: string; delay: number; isPlaying: boolean }> = ({ height, color, delay, isPlaying }) => (
  <div
    className={`w-1 rounded-full ${color} transition-transform duration-500`}
    style={{ 
      height: `${height}px`, 
      animation: isPlaying ? `wave 1.5s ease-in-out infinite ${delay}s` : 'none'
    }}
  >
    <style>{`
      @keyframes wave {
        0%, 100% { transform: scaleY(0.3); }
        50% { transform: scaleY(1); }
      }
    `}</style>
  </div>
);

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, waveformColor, buttonColor, textColor, flowType, intentions }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const generatedScriptRef = useRef<string | null>(null);

  const isEnabled = flowType === 'rise' 
    ? !!(intentions.energy && intentions.emotion) 
    : !!(intentions.victory && intentions.release);

  const heights = [20, 30, 25, 35, 22, 28, 32, 26, 20, 30, 25, 35, 22, 28, 32, 26, 20, 30, 25, 35, 22, 28, 32, 26];
  
  const stopAudio = () => {
    if (sourceRef.current) {
        sourceRef.current.onended = null;
        try {
          sourceRef.current.stop();
        } catch(e) { console.warn("Audio source already stopped:", e); }
        sourceRef.current = null;
    }
    setIsPlaying(false);
  };
  
  const playAudio = async () => {
    if (!audioContextRef.current || !audioBufferRef.current) return;
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    
    stopAudio();

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.connect(audioContextRef.current.destination);
    
    source.onended = () => {
      if (sourceRef.current === source) {
        setIsPlaying(false);
        sourceRef.current = null;
      }
    };
    
    source.start(0);
    sourceRef.current = source;
    setIsPlaying(true);
  };
  
  const generatePersonalizedScript = async (): Promise<string | null> => {
    let prompt = "";
    if (flowType === 'rise' && intentions.energy && intentions.emotion) {
      prompt = `Generate a short, calming, 1-minute guided meditation script. The user wants to cultivate an energy of '${intentions.energy}' and invite in the emotion of '${intentions.emotion}'. The tone should be gentle, reassuring, and uplifting.`;
    } else if (flowType === 'rest' && intentions.victory && intentions.release) {
      prompt = `Generate a short, calming, 1-minute guided meditation script for bedtime. The user is celebrating a small victory of '${intentions.victory}' and wants to release '${intentions.release}'. The tone should be gentle, soothing, and encourage letting go.`
    } else {
      return null;
    }

    try {
        const ai = new GoogleGenAI({apiKey: process.env.API_KEY as string});
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        return response.text;
    } catch(error) {
        console.error("Failed to generate script:", error);
        alert("Sorry, there was an error personalizing your audio. Please try again.");
        return null;
    }
  };

  const handleTogglePlay = async () => {
    if (isLoading || !isEnabled) return;

    if (!process.env.API_KEY) {
      alert("API Key is not configured. Please set up your environment variables.");
      return;
    }
    
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      } catch (e) {
        console.error("AudioContext could not be created:", e);
        alert("Your browser does not support audio features.");
        return;
      }
    }
    
    if (isPlaying) {
      stopAudio();
    } else {
      if (audioBufferRef.current) {
        playAudio();
      } else {
        setIsLoading(true);
        try {
          const script = await generatePersonalizedScript();
          if (!script) {
             throw new Error("Script generation failed.");
          }
          generatedScriptRef.current = script;

          const ai = new GoogleGenAI({apiKey: process.env.API_KEY as string});
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: `Say with a calm, gentle, and reassuring voice: ${script}` }] }],
            config: {
              responseModalities: [Modality.AUDIO],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: flowType === 'rise' ? 'Kore' : 'Zephyr' },
                },
              },
            },
          });

          const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
          if (base64Audio && audioContextRef.current) {
            const audioBytes = decode(base64Audio);
            const audioBuffer = await decodeAudioData(audioBytes, audioContextRef.current, 24000, 1);
            audioBufferRef.current = audioBuffer;
            playAudio();
          } else {
             throw new Error("No audio data received from API.");
          }
        } catch (error) {
          console.error("Failed to generate audio:", error);
          alert("Sorry, there was an error generating the audio. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }
    }
  };
  
  useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);
  
  useEffect(() => {
    // Reset audio when intentions change to force re-generation
    stopAudio();
    audioBufferRef.current = null;
    generatedScriptRef.current = null;
  }, [intentions.energy, intentions.emotion, intentions.victory, intentions.release]);


  return (
    <div className={`flex items-center space-x-4 ${textColor}`}>
      <div className="relative group">
        <button
          onClick={handleTogglePlay}
          disabled={isLoading || !isEnabled}
          className={`w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed ${buttonColor}`}
          aria-label={isPlaying ? "Pause audio" : "Play personalized audio"}
        >
          {isLoading ? <SpinnerIcon className="w-7 h-7" /> : 
          isPlaying ? <PauseIcon className="w-7 h-7" /> : 
          <PlayIcon className="w-7 h-7" />}
        </button>
        {!isEnabled && (
            <div className="absolute bottom-full mb-2 w-max max-w-xs left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Set your intentions to unlock your personalized audio.
            </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center space-x-3 mt-2">
          <div className="flex items-end space-x-1 h-10">
            {heights.map((h, i) => (
              <WaveformBar key={i} height={h} color={waveformColor} delay={i * 0.1} isPlaying={isPlaying} />
            ))}
          </div>
        </div>
      </div>
      <span className="font-semibold text-lg">{isEnabled ? 'Dynamic' : 'Locked'}</span>
    </div>
  );
};

export default AudioPlayer;
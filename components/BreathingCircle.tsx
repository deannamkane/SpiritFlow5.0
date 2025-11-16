
import React, { useState, useEffect, useMemo } from 'react';
import Card from './Card';

// Define breathing techniques
const techniques = [
  {
    name: 'Balanced',
    pattern: [
      { label: 'Breathe In', duration: 4000 },
      { label: 'Breathe Out', duration: 4000 },
    ],
  },
  {
    name: 'Box',
    pattern: [
      { label: 'Breathe In', duration: 4000 },
      { label: 'Hold', duration: 4000 },
      { label: 'Breathe Out', duration: 4000 },
      { label: 'Hold', duration: 4000 },
    ],
  },
  {
    name: 'Relax',
    pattern: [
      { label: 'Breathe In', duration: 4000 },
      { label: 'Breathe Out', duration: 8000 },
    ],
  },
];


const BreathingCircle: React.FC<{ textColor: string }> = ({ textColor }) => {
  const [selectedTechniqueIndex, setSelectedTechniqueIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [time, setTime] = useState(60);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = ((60 - time) / 60) * circumference;

  const currentTechnique = useMemo(() => techniques[selectedTechniqueIndex], [selectedTechniqueIndex]);
  const currentStep = useMemo(() => currentTechnique.pattern[currentStepIndex], [currentTechnique, currentStepIndex]);

  // Effect for the breathing cycle (inhale, hold, exhale)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % currentTechnique.pattern.length);
    }, currentStep.duration);

    return () => clearTimeout(timer);
  }, [currentStep, currentTechnique]);

  // Effect for the overall 60s timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  
  const handleTechniqueChange = (index: number) => {
    setSelectedTechniqueIndex(index);
    setCurrentStepIndex(0); // Reset cycle on technique change
  };
  
  const isPulsing = currentStep.label.includes('In');

  return (
    <Card className="flex flex-col items-center justify-center">
        <div className="flex justify-center space-x-2 mb-6">
            {techniques.map((tech, index) => (
                <button
                    key={tech.name}
                    onClick={() => handleTechniqueChange(index)}
                    className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
                        selectedTechniqueIndex === index
                        ? 'bg-golden-sun text-slate-800'
                        : 'bg-white/10 text-slate-600 hover:bg-white/20'
                    }`}
                >
                    {tech.name}
                </button>
            ))}
        </div>

      <div className="relative w-52 h-52 flex items-center justify-center">
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth="10" fill="transparent" />
            <circle
                cx="100" cy="100" r={radius}
                stroke="url(#grad)" strokeWidth="10" fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
                strokeLinecap="round"
                className="transition-all duration-1000 linear"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#F8C6C8" />
              </linearGradient>
            </defs>
        </svg>
        <div 
            className={`absolute w-40 h-40 bg-golden-sun/80 rounded-full ${isPulsing ? 'animate-pulse-breathe' : ''}`}
            style={{ animationDuration: `${currentStep.duration}ms` }}
        />
        <span className={`relative text-2xl font-bold z-10 text-slate-800`}>
          {currentStep.label}
        </span>
        <span className={`absolute -bottom-8 text-lg ${textColor} font-semibold`}>{time}s</span>
      </div>
    </Card>
  );
};

export default BreathingCircle;

import React, { useState } from 'react';
import Card from './Card';

interface EveningReflectionProps {
    setEveningVictory: (victory: string) => void;
    setEveningRelease: (release: string) => void;
}

const ReflectionPrompt: React.FC<{
    prompt: string, 
    onSet: (value: string) => void,
}> = ({ prompt, onSet }) => {
    const [value, setValue] = useState('');
    const [isLocked, setIsLocked] = useState(false);

    const handleSet = () => {
        if (value.trim()) {
            onSet(value);
            setIsLocked(true);
        }
    };

    const handleEdit = () => {
        setIsLocked(false);
    }

    return (
        <div>
            <label className="block text-lg font-semibold mb-2 text-moonlight-silver">{prompt}</label>
            {isLocked ? (
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <p className="italic text-moonlight-silver opacity-80">{value}</p>
                    <button onClick={handleEdit} className="text-sm font-semibold text-moonlight-silver opacity-70 hover:opacity-100 transition-colors">Edit</button>
                </div>
            ) : (
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Your reflection..."
                        className="w-full bg-white/10 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 placeholder-moonlight-silver/50 text-moonlight-silver"
                    />
                    <button 
                        onClick={handleSet}
                        disabled={!value.trim()}
                        className="px-4 py-2 rounded-lg bg-moonlight-silver/90 text-deep-indigo font-bold hover:brightness-110 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Set
                    </button>
                </div>
            )}
        </div>
    );
}

const EveningReflection: React.FC<EveningReflectionProps> = ({ setEveningVictory, setEveningRelease }) => {
  return (
    <Card className="bg-translucent-lavender">
      <div className="space-y-6">
        <ReflectionPrompt 
            prompt="What small victory can I honor?"
            onSet={setEveningVictory}
        />
        <ReflectionPrompt 
            prompt="What can I release before rest?"
            onSet={setEveningRelease}
        />
      </div>
    </Card>
  );
};

export default EveningReflection;
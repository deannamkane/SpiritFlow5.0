
import React from 'react';
import Card from './Card';
import { MicIcon } from './icons';

interface ReflectionPromptsProps {
  prompts: string[];
  textColor: string;
  placeholderColor: string;
  bgColor: string;
}

const ReflectionPrompts: React.FC<ReflectionPromptsProps> = ({ prompts, textColor, placeholderColor, bgColor }) => {
  return (
    <Card className={bgColor}>
      <div className={`space-y-6 ${textColor}`}>
        {prompts.map((prompt, index) => (
          <div key={index}>
            <label className="block text-lg font-semibold mb-2">{prompt}</label>
            <div className="relative">
              <textarea
                rows={2}
                placeholder="Type or speak your reflection..."
                className={`w-full bg-white/10 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none ${placeholderColor}`}
              />
              <MicIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ReflectionPrompts;

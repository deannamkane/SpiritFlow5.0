
import React, { useState, useEffect } from 'react';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress on mount
    const timer = setTimeout(() => setCurrentProgress(progress), 100);
    return () => clearTimeout(timer);
  }, [progress]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentProgress / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60" cy="60" r={radius}
          stroke="rgba(224, 229, 245, 0.2)" strokeWidth="10" fill="transparent"
        />
        <circle
          cx="60" cy="60" r={radius}
          stroke="url(#progressGrad)" strokeWidth="10" fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8b2e1" />
            <stop offset="100%" stopColor="#E0E5F5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-moonlight-silver">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;

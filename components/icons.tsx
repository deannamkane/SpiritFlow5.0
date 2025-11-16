import React from 'react';

export const GalaxyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="galaxyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8C6C8" />
        <stop offset="100%" stopColor="#F7E9D7" />
      </linearGradient>
    </defs>
    <path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="url(#galaxyGradient)" strokeWidth="4" />
    <path d="M50,90 A40,40 0 0,1 10,50" fill="none" stroke="url(#galaxyGradient)" strokeWidth="4" />
    <path d="M50,20 A30,30 0 0,0 20,50" fill="none" stroke="url(#galaxyGradient)" strokeWidth="3" />
    <path d="M50,80 A30,30 0 0,0 80,50" fill="none" stroke="url(#galaxyGradient)" strokeWidth="3" />
    <circle cx="50" cy="50" r="5" fill="url(#galaxyGradient)" />
  </svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 2.25zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM5.106 17.894a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM21.75 12a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.5 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12zM17.894 18.894a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06zM6.106 5.106a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06L6.106 6.166a.75.75 0 010-1.06zM12 19.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 19.5z" clipRule="evenodd" />
    </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.635 4.398-8.528a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
);


export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

export const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

export const MicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
    <path d="M6 15a.75.75 0 00-1.5 0v.065a5.25 5.25 0 0010.5 0V15a.75.75 0 00-1.5 0v.065a3.75 3.75 0-1.2-7.435V15z" />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
  </svg>
);

export const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);

export const FireIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0 5.385 4.365 9.75 9.75 9.75 1.512 0 2.954-.35 4.295-1.002a.75.75 0 00-.704-1.242A8.25 8.25 0 0112 15.75a8.25 8.25 0 01-1.125-4.469.75.75 0 00-1.423-.231c-.34.664-.635 1.37-.896 2.133a.75.75 0 00.354 1.001A8.25 8.25 0 0112 21.75c5.385 0 9.75-4.365 9.75-9.75 0-1.512-.35-2.954-1.002-4.295a.75.75 0 00-1.242-.704A8.25 8.25 0 0115.75 12a8.25 8.25 0 01-4.469-1.125.75.75 0 00-.231-1.423c.664-.34 1.37-.635 2.133-.896a.75.75 0 001.001.354A8.25 8.25 0 0121.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12c0-5.385 4.365-9.75 9.75-9.75 1.073 0 2.102.174 3.07.492a.75.75 0 00.942-1.256C14.01 1.123 12.533.75 10.923.75 5.25.75.75 5.25.75 10.923c0 5.674 4.5 10.174 10.173 10.174 5.674 0 10.174-4.5 10.174-10.174 0-1.61-.373-3.087-.998-4.397a.75.75 0 00-1.256.941A8.25 8.25 0 0119.5 10.923a8.25 8.25 0 01-8.25 8.25c-4.557 0-8.25-3.693-8.25-8.25a8.25 8.25 0 018.25-8.25c1.073 0 2.102.174 3.07.492a.75.75 0 00.942-1.256C14.01 1.123 12.533.75 10.923.75 5.25.75.75 5.25.75 10.923c0 5.674 4.5 10.174 10.173 10.174 5.674 0 10.174-4.5 10.174-10.174 0-1.61-.373-3.087-.998-4.397a.75.75 0 00-1.256.941A8.25 8.25 0 0119.5 10.923c-2.458 2.458-5.742 4.125-9.423 4.125s-6.965-1.667-9.423-4.125A8.25 8.25 0 0110.923 2.25c1.073 0 2.102.174 3.07.492a.75.75 0 00.942-1.256C14.01 1.123 12.533.75 10.923.75 5.25.75.75 5.25.75 10.923c0 5.674 4.5 10.174 10.173 10.174 5.674 0 10.174-4.5 10.174-10.174 0-1.61-.373-3.087-1-4.397a.75.75 0 00-1.256.941A8.25 8.25 0 0119.5 10.923c-2.458 2.458-5.742 4.125-9.423 4.125S3.535 13.38 1.077 10.923A8.25 8.25 0 0110.923 2.25z" clipRule="evenodd" />
    </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.875 3a.375.375 0 01.375-.375h2.25a.375.375 0 010 .75h-2.25a.375.375 0 01-.375-.375zM11.25 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zM13.5 6.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zm.375 3a.375.375 0 01.375-.375h3.75a.375.375 0 010 .75h-3.75a.375.375 0 01-.375-.375z" clipRule="evenodd" />
    </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
    </svg>
);
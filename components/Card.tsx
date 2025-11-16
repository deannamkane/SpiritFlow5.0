
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:border-white/20 animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

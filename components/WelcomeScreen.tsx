import React, { useState } from 'react';
import { GalaxyIcon } from './icons';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen w-full font-nunito-sans bg-gradient-to-br from-deep-indigo to-midnight-blue flex flex-col items-center justify-center p-4 text-moonlight-silver overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '3s'}}></div>
      <div className="shooting-star" style={{ top: '15%', left: '-100px', filter: 'drop-shadow(0 0 6px rgba(224, 229, 245, 0.7))' }}></div>
      <div className="shooting-star" style={{ top: '25%', left: '-150px', animationDelay: '1.2s', filter: 'drop-shadow(0 0 6px rgba(224, 229, 245, 0.7))' }}></div>
      
      <div className="text-center z-10 animate-fade-in">
        <GalaxyIcon className="w-20 h-20 mx-auto text-moonlight-silver/80" />
        <h1 className="text-4xl sm:text-5xl font-bold mt-4">Welcome to SpiritFlow</h1>
        <p className="text-xl opacity-80 mt-2">Your daily space for mindfulness.</p>

        <form onSubmit={handleSubmit} className="mt-12 max-w-sm mx-auto">
          <label htmlFor="name-input" className="text-lg font-semibold">
            What should we call you?
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full mt-4 bg-white/10 rounded-lg py-3 px-4 text-center text-lg focus:outline-none focus:ring-2 focus:ring-moonlight-silver transition-all duration-300 placeholder-moonlight-silver/50"
            autoFocus
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full mt-6 px-8 py-4 text-xl font-bold text-slate-800 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-lg"
          >
            Begin Your Journey
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;

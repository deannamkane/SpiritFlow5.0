import React, { useState, useEffect } from 'react';
import RiseFlow from './flows/RiseFlow';
import RestFlow from './flows/RestFlow';
import ProgressView from './views/ProgressView';
import WelcomeScreen from './components/WelcomeScreen';
import { SunIcon, MoonIcon } from './components/icons';
import { dailyContent } from './data/dailyContent';

type Flow = 'rise' | 'rest';
type View = 'flow' | 'progress';

export interface Goal {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [currentFlow, setCurrentFlow] = useState<Flow>('rise');
  const [currentView, setCurrentView] = useState<View>('flow');
  const [morningAffirmation, setMorningAffirmation] = useState<string>("I am focused, calm, and ready to receive.");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [streak, setStreak] = useState(3); // Example streak
  
  // State for morning reflections
  const [morningEnergy, setMorningEnergy] = useState('');
  const [morningEmotion, setMorningEmotion] = useState('');

  // State for evening reflections
  const [eveningVictory, setEveningVictory] = useState('');
  const [eveningRelease, setEveningRelease] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('spiritFlowUserName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Get content for the current day of the week
  const dayIndex = new Date().getDay(); // Sunday = 0, Monday = 1, etc.
  const todayContent = dailyContent[dayIndex];
  
  const handleNameSubmit = (name: string) => {
    localStorage.setItem('spiritFlowUserName', name);
    setUserName(name);
  };

  const handleToggleFlow = () => {
    setCurrentFlow(prev => prev === 'rise' ? 'rest' : 'rise');
  };

  const handleToggleGoal = (indexToToggle: number) => {
    setGoals(prevGoals => 
      prevGoals.map((goal, index) => 
        index === indexToToggle ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };
  
  const backgroundClass = currentFlow === 'rise' 
    ? 'from-soft-sand to-warm-blush' 
    : 'from-deep-indigo to-midnight-blue';

  const totalGoalsCompleted = 12; // Example data

  if (!userName) {
    return <WelcomeScreen onNameSubmit={handleNameSubmit} />;
  }

  return (
    <div className={`min-h-screen w-full font-nunito-sans bg-gradient-to-br ${backgroundClass} transition-all duration-1000 text-slate-800 overflow-y-auto`}>
      {currentFlow === 'rise' && (
        <>
          <div className="absolute top-0 left-1/4 w-1 h-full bg-white opacity-10 animate-light-beam-1"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-white opacity-10 animate-light-beam-2"></div>
        </>
      )}
      {currentFlow === 'rest' && (
         <>
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '1s'}}></div>
             <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{animationDelay: '3s'}}></div>
        </>
      )}
      
      {currentView === 'flow' && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleToggleFlow}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg hover:bg-white/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Switch to ${currentFlow === 'rise' ? 'Rest' : 'Rise'} Flow`}
          >
            {currentFlow === 'rise' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
          </button>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8 sm:py-16">
        {currentView === 'flow' ? (
          currentFlow === 'rise' ? (
            <RiseFlow
              userName={userName}
              morningAffirmation={morningAffirmation} 
              setMorningAffirmation={setMorningAffirmation}
              goals={goals}
              setGoals={setGoals}
              morningEnergy={morningEnergy}
              setMorningEnergy={setMorningEnergy}
              morningEmotion={morningEmotion}
              setMorningEmotion={setMorningEmotion}
              riseQuote={todayContent.riseQuote}
              onShowProgress={() => setCurrentView('progress')}
            />
          ) : (
            <RestFlow 
              userName={userName}
              morningAffirmation={morningAffirmation} 
              morningEnergy={morningEnergy}
              morningEmotion={morningEmotion}
              goals={goals}
              onToggleGoal={handleToggleGoal}
              restQuote={todayContent.restQuote}
              eveningVictory={eveningVictory}
              setEveningVictory={setEveningVictory}
              eveningRelease={eveningRelease}
              setEveningRelease={setEveningRelease}
            />
          )
        ) : (
          <ProgressView 
            streak={streak}
            totalGoalsCompleted={totalGoalsCompleted}
            onBack={() => setCurrentView('flow')}
            isRiseMode={currentFlow === 'rise'}
          />
        )}
      </main>
    </div>
  );
};

export default App;
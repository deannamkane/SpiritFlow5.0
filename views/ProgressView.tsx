import React from 'react';
import Card from '../components/Card';
import QuoteCard from '../components/QuoteCard';
import { FireIcon, TrophyIcon, ArrowLeftIcon } from '../components/icons';

interface ProgressViewProps {
    streak: number;
    totalGoalsCompleted: number;
    onBack: () => void;
    isRiseMode: boolean;
}

const quotes = [
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

const DayIndicator: React.FC<{ day: string; isComplete: boolean; isToday: boolean, isRiseMode: boolean }> = ({ day, isComplete, isToday, isRiseMode }) => {
    const baseClasses = "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all";
    const modeColors = isRiseMode 
        ? {
            complete: "bg-golden-sun text-slate-800",
            incomplete: "bg-white/20 text-slate-600",
            today: "ring-2 ring-golden-sun"
          }
        : {
            complete: "bg-moonlight-silver text-deep-indigo",
            incomplete: "bg-white/10 text-moonlight-silver/60",
            today: "ring-2 ring-moonlight-silver"
        };
    
    const completeClass = isComplete ? modeColors.complete : modeColors.incomplete;
    const todayClass = isToday ? modeColors.today : "";

    return (
        <div className="text-center">
            <div className={`${baseClasses} ${completeClass} ${todayClass}`}>
                {day.charAt(0)}
            </div>
        </div>
    );
};


const ProgressView: React.FC<ProgressViewProps> = ({ streak, totalGoalsCompleted, onBack, isRiseMode }) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const weeklyProgress = [true, true, true, false, true, false, false]; // Example data
    const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
    const todayIndex = new Date().getDay();

    const textColor = isRiseMode ? 'text-slate-800' : 'text-moonlight-silver';
    const subTextColor = isRiseMode ? 'text-slate-700' : 'text-moonlight-silver/80';
    const iconColor = isRiseMode ? 'text-amber-500' : 'text-yellow-300';

    return (
        <div className="animate-fade-in relative">
            <button 
                onClick={onBack} 
                className={`absolute -top-4 left-0 ${subTextColor} hover:text-opacity-100 transition-opacity flex items-center group`}>
                <ArrowLeftIcon className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
                Back to Flow
            </button>
            <header className={`text-center mb-8 sm:mb-12 ${textColor}`}>
                <h1 className="text-3xl sm:text-4xl font-bold">Your Journey</h1>
                <p className={`text-xl ${subTextColor} mt-2`}>See how far you've come.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1 flex flex-col items-center justify-center text-center">
                    <FireIcon className={`w-16 h-16 ${iconColor}`} />
                    <h2 className={`text-5xl font-bold mt-2 ${textColor}`}>{streak}</h2>
                    <p className={`mt-1 font-semibold ${subTextColor}`}>Day Streak</p>
                </Card>

                <Card className="lg:col-span-2">
                    <h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>This Week's Flow</h3>
                    <div className="flex justify-around">
                       {dayLabels.map((day, index) => (
                           <DayIndicator 
                                key={index} 
                                day={day} 
                                isComplete={weeklyProgress[index]}
                                isToday={index === todayIndex}
                                isRiseMode={isRiseMode}
                            />
                       ))}
                    </div>
                </Card>

                <Card className="lg:col-span-3">
                    <h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>Milestones</h3>
                    <div className="flex flex-col sm:flex-row justify-around items-center text-center space-y-4 sm:space-y-0">
                        <div className="flex items-center">
                            <TrophyIcon className={`w-10 h-10 ${iconColor} mr-3`} />
                            <div>
                                <p className={`text-2xl font-bold ${textColor}`}>{totalGoalsCompleted}</p>
                                <p className={subTextColor}>Goals Completed</p>
                            </div>
                        </div>
                         <div className="flex items-center">
                            <TrophyIcon className={`w-10 h-10 ${iconColor} mr-3`} />
                            <div>
                                <p className={`text-2xl font-bold ${textColor}`}>1st Week</p>
                                <p className={subTextColor}>Flowing Consistently</p>
                            </div>
                        </div>
                    </div>
                </Card>
                
                 <div className="lg:col-span-3">
                    <QuoteCard
                        quote={randomQuote.quote}
                        author={randomQuote.author}
                        textColor={textColor}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressView;
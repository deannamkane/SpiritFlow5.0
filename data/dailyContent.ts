export interface DailyContent {
  riseQuote: { quote: string; author: string; };
  restQuote: { quote: string; author: string; };
}

export const dailyContent: DailyContent[] = [
  // Sunday
  { 
    riseQuote: { quote: "A Sunday well spent brings a week of content.", author: "Proverb" },
    restQuote: { quote: "The soul feels refreshed when it is near tranquil waters.", author: "Unknown" }
  },
  // Monday
  { 
    riseQuote: { quote: "This is your Monday morning reminder that you can handle whatever this week throws at you.", author: "Unknown" },
    restQuote: { quote: "Let go of the day's battles. Peace is your natural state.", author: "Lao Tzu" }
  },
  // Tuesday
  { 
    riseQuote: { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    restQuote: { quote: "The best bridge between despair and hope is a good night's sleep.", author: "E. Joseph Cossman" }
  },
  // Wednesday
  { 
    riseQuote: { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    restQuote: { quote: "Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.", author: "Mahatma Gandhi" }
  },
  // Thursday
  { 
    riseQuote: { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    restQuote: { quote: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day is by no means a waste of time.", author: "John Lubbock" }
  },
  // Friday
  { 
    riseQuote: { quote: "Make each day your masterpiece.", author: "John Wooden" },
    restQuote: { quote: "Finish each day and be done with it. You have done what you could.", author: "Ralph Waldo Emerson" }
  },
  // Saturday
  { 
    riseQuote: { quote: "The key to a productive weekend is a positive mindset.", author: "Unknown" },
    restQuote: { quote: "Even a soul submerged in sleep is hard at work and helps make something of the world.", author: "Heraclitus" }
  },
];
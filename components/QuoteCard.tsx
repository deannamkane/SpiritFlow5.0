
import React from 'react';
import Card from './Card';

interface QuoteCardProps {
  quote: string;
  author: string;
  textColor: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, textColor }) => {
  return (
    <Card className="bg-white/20">
      <blockquote className={`text-center ${textColor}`}>
        <p className="text-xl italic">“{quote}”</p>
        <cite className="block text-right not-italic mt-2 font-semibold">— {author}</cite>
      </blockquote>
    </Card>
  );
};

export default QuoteCard;

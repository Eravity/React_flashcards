import { useState } from "react";

interface CardProps {
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }): JSX.Element => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    // prettier-ignore
    <div
      className={`flex justify-center mx-5 p-16 text-center items-center h-5/6 border shadow-md cursor-pointer 
       ${showAnswer ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-neutral-800"} border-neutral-700 rounded-xl`}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <h1
        className={`text-xl font-semibold text-neutral-300`}
      >
        {showAnswer ? <h1 className="text-3xl">{answer}</h1> : <h1>{question}</h1>}
      </h1>
    </div>
  );
};

export default Card;

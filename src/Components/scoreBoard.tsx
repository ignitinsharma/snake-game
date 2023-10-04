import React from "react";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score">
      <div className="text-[bold] text-[1.5rem]">Snake Game 🐍</div>
      <div className="text-center text-2xl font-bold">
        Score : <span className="text-red-500">{score}</span>
      </div>
    </div>
  );
};

export default Score;

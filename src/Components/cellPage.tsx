import React from "react";

interface CellProps {
  isFood: boolean;
  isSnake: boolean;
  isSnakeHead: boolean;
}

const Cell: React.FC<CellProps> = ({ isFood, isSnake, isSnakeHead }) => {
  const classes = `
    w-30 h-30
    ${isFood ? "bg-red-500" : ""}
    ${isSnake ? "bg-green-500" : ""}
    ${isSnakeHead ? "rounded-full overflow-hidden bg-[black]" : "bg-white"}
  `;

  return <div className={classes}></div>;
};

export default Cell;
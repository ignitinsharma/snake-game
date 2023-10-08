import React from "react";

interface CellProps {
  isFood: boolean;
  isSnake: boolean;
  isSnakeHead: boolean;
}

const Cell: React.FC<CellProps> = ({ isFood, isSnake, isSnakeHead }) => {
  let classes = "cell";

  if (isFood) {
    classes += " food";
  }

  if (isSnake) {
    classes += " snake";
  }

  if (isSnakeHead) {
    classes += " snake-head";
  }

  return <div className={classes}></div>;
};

export default Cell;

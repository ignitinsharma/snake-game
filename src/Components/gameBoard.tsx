import React from "react";
import Cell from "./cellPage";

interface BoardProps {
  gridSize: number;
  food: { x: number; y: number };
  snake: Array<{ x: number; y: number }>;
}

const Board: React.FC<BoardProps> = ({ gridSize, food, snake }) => {
  const renderBoard = () => {
    const cellArray: JSX.Element[] = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const isFood = food.x === row && food.y === col;
        const isSnakeHead = snake[0].x === row && snake[0].y === col;
        const isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        cellArray.push(
          <Cell
            key={`${row}-${col}`}
            isFood={isFood}
            isSnake={isSnake}
            isSnakeHead={isSnakeHead}
          />
        );
      }
    }

    return cellArray;
  };

  return <div className="board">{renderBoard()}</div>;
};

export default Board;

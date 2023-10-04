import { useState } from "react";
import HomeImage from "../assets/Home_image.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameLevel } from "../Redux/Slices/gameSlices";

const Home = () => {
  const navigate = useNavigate();
  const [movePage, setMovePage] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {};

  const handleLevelChange = (level: number) => {
    dispatch(setGameLevel(level));
    setMovePage(true);

    setTimeout(() => {
      navigate("/game");
    }, 1000);
  };
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${HomeImage})`,
      }}
    >
      <div className="flex h-full justify-center items-center">
        <div className="text-center">
          <h3 className="text-[1.5rem] text-[black] font-bold mb-4">
            {movePage ? "Wait..." : "Welcome Select Level"}
          </h3>

          <div className="flex justify-between gap-2 ">
            <button
              onClick={() => handleLevelChange(350)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Easy
            </button>
            <button
              onClick={() => handleLevelChange(250)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Medium
            </button>
            <button
              onClick={() => handleLevelChange(150)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Hard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

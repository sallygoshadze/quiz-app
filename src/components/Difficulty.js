import React from 'react';

const Difficulty = ({ DIFFICULTY, chooseDifficulty, gameStarted }) => {
  return (
    <div>
      {/* Difficulty levels displayed only if the game is not started */}
      {!gameStarted
        ? DIFFICULTY.map((level) => (
            <button value={level} key={level} onClick={chooseDifficulty}>
              {level}
            </button>
          ))
        : null}
    </div>
  );
};

export default Difficulty;

import React from 'react';

const Difficulty = ({
  gameOver,
  userAnswers,
  total,
  DIFFICULTY,
  chooseDifficulty,
}) => {
  return (
    <div>
      {/* Difficulty levels displayed only if the game is not started or the user answered the last question */}
      {gameOver || userAnswers.length === total
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

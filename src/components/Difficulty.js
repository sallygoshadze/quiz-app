import React from 'react';

const Difficulty = ({ DIFFICULTY, chooseDifficulty, gameStarted }) => {
  return (
    <>
      {/* Difficulty levels displayed only if the game is not started */}
      {!gameStarted ? <h4>Pick a difficulty level</h4> : null}
      <div className="choice-section">
        {!gameStarted
          ? DIFFICULTY.map((level) => (
              <button
                className="btn difficulty-btn"
                value={level}
                key={level}
                onClick={chooseDifficulty}
              >
                {level}
              </button>
            ))
          : null}
      </div>
    </>
  );
};

export default Difficulty;

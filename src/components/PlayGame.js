import React from 'react';

const PlayGame = ({ gameOver, userAnswers, total, playGame }) => {
  return (
    <div>
      {/* Play button displayed only if the game is over or the user has answered the last question */}
      {gameOver || userAnswers.length === total ? (
        <button onClick={playGame}>Play</button>
      ) : null}
    </div>
  );
};

export default PlayGame;

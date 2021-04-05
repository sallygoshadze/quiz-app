import React from 'react';

const PlayGame = ({ gameOver, userAnswers, total, playGame, userCategory }) => {
  return (
    <div>
      {/* Play button displayed only if the user has chosen a catogory, game is over or the user has answered the last question */}
      {userCategory && (gameOver || userAnswers.length === total) ? (
        <button onClick={playGame}>Play</button>
      ) : null}
    </div>
  );
};

export default PlayGame;

import React from 'react';

const PlayGame = ({
  gameOver,
  userAnswers,
  total,
  playGame,
  userCategory,
  difficulty,
  gameStarted,
}) => {
  return (
    <div>
      {/* Play button displayed only if the user has chosen a category and a difficulty level, game is over or the user has answered the last question */}
      {userCategory && difficulty && !gameStarted ? (
        <button onClick={playGame}>Play</button>
      ) : null}
    </div>
  );
};

export default PlayGame;

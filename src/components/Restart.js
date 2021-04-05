import React from 'react';

const Restart = ({ gameOver, restartGame, userAnswers, total }) => {
  return (
    <div>
      {/* Restart button displayed only when the user finishes the game */}
      {userAnswers.length === total ? (
        <button onClick={restartGame}>Restart</button>
      ) : null}
    </div>
  );
};

export default Restart;

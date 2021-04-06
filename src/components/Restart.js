import React from 'react';

const Restart = ({ restartGame, userAnswers, total }) => {
  return (
    <div>
      {/* Restart button displayed only when the user finishes the game */}
      {userAnswers.length === total ? (
        <button className="btn restart-btn" onClick={restartGame}>
          Restart
        </button>
      ) : null}
    </div>
  );
};

export default Restart;

import React from 'react';

const Score = ({ score, gameOver }) => {
  return (
    <div className='score'>
      {/* Score showing when we're not in a game over mode */}
      {!gameOver ? <p>Score: {score}</p> : null}
    </div>
  );
};

export default Score;

import React from 'react';

const Answers = ({ answers, userAnswer, checkAnswer }) => {
  return (
    <div className="answers">
      {answers.map((answer) => (
        <div key={answer}>
          <button
            className="btn answer-btn"
            disabled={!!userAnswer}
            value={answer}
            onClick={checkAnswer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Answers;

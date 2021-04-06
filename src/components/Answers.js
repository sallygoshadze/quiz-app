import React from 'react';

const Answers = ({ answers, userAnswer, checkAnswer }) => {
  return (
    <div className="answers">
      {answers.map((answer) => (
        <div key={answer}>
          <button
            className={`btn answer-btn ${
              !!userAnswer &&
              userAnswer.correct &&
              userAnswer.correctAnswer === answer
                ? 'correct'
                : !!userAnswer &&
                  !userAnswer.correct &&
                  answer === userAnswer.answer &&
                  answer !== userAnswer.correctAnswer
                ? 'incorrect'
                : !!userAnswer && answer === userAnswer.correctAnswer
                ? 'correct'
                : ''
            }`}
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

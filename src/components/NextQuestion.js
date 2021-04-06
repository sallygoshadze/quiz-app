import React from 'react';

const NextQuestion = ({
  gameOver,
  loading,
  userAnswers,
  number,
  total,
  nextQuestion,
}) => {
  return (
    <div className="next">
      {/* Next button Displayed only if the user has clicked an answer and it's not the last question */}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== total - 1 ? (
        <button className="btn next-btn" onClick={nextQuestion}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default NextQuestion;

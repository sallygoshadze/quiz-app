import React from 'react';
import Answers from './Answers';
import CurrentQuestion from './CurrentQuestion';

const Questions = ({
  question,
  answers,
  checkAnswer,
  userAnswer,
  currentNum,
  total,
}) => {
  return (
    <div>
      <CurrentQuestion
        currentNum={currentNum}
        question={question}
        total={total}
      />
      <Answers
        answers={answers}
        userAnswer={userAnswer}
        checkAnswer={checkAnswer}
      />
    </div>
  );
};

export default Questions;

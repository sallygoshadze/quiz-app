import React from 'react';

const CurrentQuestion = ({ currentNum, total, question }) => {
  return (
    <div>
      <p className="number">
        Question: {currentNum} / {total}
      </p>
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: question }}
      ></p>
    </div>
  );
};

export default CurrentQuestion;

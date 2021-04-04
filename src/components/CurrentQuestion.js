import React from 'react';

const CurrentQuestion = ({ currentNum, total, question }) => {
  return (
    <div>
      <p>
        Question: {currentNum} / {total}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
    </div>
  );
};

export default CurrentQuestion;

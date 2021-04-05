import React from 'react';

const Categories = ({ gameOver, userAnswers, total, categories, chooseCategory }) => {
  return (
    <div>
      {gameOver || userAnswers.length === total
        ? categories.map((category) => (
            <button
              key={category.id}
              value={category.id}
              onClick={chooseCategory}
            >
              {category.name}
            </button>
          ))
        : null}
    </div>
  );
};

export default Categories;

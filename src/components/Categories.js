import React from 'react';

const Categories = ({
  gameOver,
  userAnswers,
  total,
  categories,
  chooseCategory,
}) => {
  return (
    <div>
      {/* Category types displayed only if the game is not started or the user answered the last question */}
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

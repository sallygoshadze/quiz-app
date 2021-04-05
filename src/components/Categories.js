import React from 'react';

const Categories = ({ categories, chooseCategory, gameStarted }) => {
  return (
    <div>
      {/* Category types displayed only if the game is not started*/}
      {!gameStarted
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

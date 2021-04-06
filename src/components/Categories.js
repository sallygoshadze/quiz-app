import React from 'react';

const Categories = ({ categories, chooseCategory, gameStarted }) => {
  return (
    <>
      {/* Category types displayed only if the game is not started*/}
      {!gameStarted ? <h4>Pick a category</h4> : null}
      <div className="choice-section">
        {!gameStarted
          ? categories.map((category) => (
              <button
                className="btn category-btn"
                key={category.id}
                value={category.id}
                onClick={chooseCategory}
              >
                {category.name}
              </button>
            ))
          : null}
      </div>
    </>
  );
};

export default Categories;

import React, { useState, useEffect } from 'react';
import { fetchQuestions, fetchCategories } from './fetchData';
import Categories from './components/Categories';
import Difficulty from './components/Difficulty';
import PlayGame from './components/PlayGame';
import Score from './components/Score';
import Loading from './components/Loading';
import Board from './components/Board';
import NextQuestion from './components/NextQuestion';
import Restart from './components/Restart';

const TOTAL_QUESTIONS = 10;
const DIFFICULTY = ['easy', 'medium', 'hard'];

const App = () => {
  const [state, setState] = useState({
    loading: false,
    questions: [],
    number: 0,
    userAnswers: [],
    score: 0,
    gameOver: true,
    categories: [],
    userCategory: '',
    difficulty: '',
    gameStarted: false,
  });

  // Fetches category types
  const getCategories = async () => {
    setState({ ...state, loading: true });
    const data = await fetchCategories();
    console.log(data);
    setState({ ...state, loading: false, categories: data });
  };

  useEffect(() => {
    getCategories();
  }, [state.gameStarted]);

  // Gets the category user clicked on
  const chooseCategory = (e) => {
    setState({ ...state, userCategory: e.currentTarget.value });
  };

  // Gets the difficulty level user clicked on
  const chooseDifficulty = (e) => {
    setState({ ...state, difficulty: e.currentTarget.value });
  };

  // Starts the quiz after the user clicks on the play button
  const playGame = async () => {
    setState({ ...state, loading: true });
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      state.difficulty,
      state.userCategory
    );
    setState({
      ...state,
      gameOver: false,
      gameStarted: true,
      questions: newQuestions,
      score: 0,
      userAnswers: [],
      number: 0,
      loading: false,
    });
  };

  // Checking user answer and handling scores
  const checkAnswer = (e) => {
    if (!state.gameOver) {
      // Clicked answer
      const answer = e.currentTarget.value;
      // Checks whether the clicked answer is correct or not
      const correct = state.questions[state.number].correct_answer === answer;

      // Add score when clicked answer is correct
      if (correct) {
        setState((prevState) => ({
          ...prevState,
          score: prevState.score + 1,
        }));
      }

      const answerObj = {
        question: state.questions[state.number].question,
        answer,
        correct,
        correctAnswer: state.questions[state.number].correct_answer,
      };

      setState((prevState) => ({
        ...prevState,
        userAnswers: [...prevState.userAnswers, answerObj],
      }));
    }
  };

  // Moving on to the next question if it's not the last one
  const nextQuestion = () => {
    const next = state.number + 1;

    if (next === TOTAL_QUESTIONS) {
      setState({ ...state, gameOver: true, gameStarted: false });
    } else {
      setState({ ...state, number: next });
    }
  };

  // Resets all the states to start again
  const restartGame = () => {
    setState({
      loading: false,
      questions: [],
      number: 0,
      userAnswers: [],
      score: 0,
      gameOver: true,
      categories: [],
      userCategory: '',
      difficulty: '',
      gameStarted: false,
    });
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <Categories
        categories={state.categories}
        chooseCategory={chooseCategory}
        gameStarted={state.gameStarted}
      />
      <Difficulty
        DIFFICULTY={DIFFICULTY}
        chooseDifficulty={chooseDifficulty}
        gameStarted={state.gameStarted}
      />
      <PlayGame
        gameOver={state.gameOver}
        userAnswers={state.userAnswers}
        total={TOTAL_QUESTIONS}
        playGame={playGame}
        userCategory={state.userCategory}
        difficulty={state.difficulty}
        gameStarted={state.gameStarted}
      />
      <Score score={state.score} gameOver={state.gameOver} />
      {state.loading && <Loading />}
      {/* Displaying the game only if it's not loading and we're not in a game over*/}
      {!state.loading && !state.gameOver && (
        <Board
          currentNum={state.number + 1}
          total={TOTAL_QUESTIONS}
          question={state.questions[state.number].question}
          answers={state.questions[state.number].answers}
          userAnswer={
            state.userAnswers ? state.userAnswers[state.number] : undefined
          }
          checkAnswer={checkAnswer}
        />
      )}
      <NextQuestion
        gameOver={state.gameOver}
        loading={state.loading}
        userAnswers={state.userAnswers}
        number={state.number}
        total={TOTAL_QUESTIONS}
        nextQuestion={nextQuestion}
      />
      <Restart
        gameOver={state.gameOver}
        userAnswers={state.userAnswers}
        total={TOTAL_QUESTIONS}
        restartGame={restartGame}
      />
    </div>
  );
};

export default App;

import axios from 'axios';
import { randomizer } from './utils';

// IDs of those five categories I want to display for an user to choose
const CATEGORY_IDS = [9, 11, 12, 14, 29];

export const fetchQuestions = async (amount, difficulty, category) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const response = await axios.get(URL);
  const data = response.data.results;
  return data.map((question) => ({
    ...question,
    answers: randomizer([
      // Shuffles the answers array so that the correct answer is located randomly between all answers
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export const fetchCategories = async () => {
  const URL = 'https://opentdb.com/api_category.php';
  const response = await axios.get(URL);
  const allCategories = response.data.trivia_categories;
  return allCategories.filter((category) => CATEGORY_IDS.includes(category.id));
};

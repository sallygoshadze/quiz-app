import axios from 'axios';
import { randomizer } from './utils';

export const fetchQuestions = async (amount, difficulty) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const response = await axios.get(URL);
  const data = response.data.results;
  return data.map((question) => ({
    ...question,
    answers: randomizer([ // Shuffles the answers array so that the correct answer is located randomly between all answers
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

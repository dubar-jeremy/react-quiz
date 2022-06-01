import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getQuiz } from '../service/api';

const useQuiz = (urlQueries) => {
  const query = useQuery(['randomQuiz'], () => getQuiz(urlQueries));

  let dataTransformed = [];

  if (query.isSuccess) {
    if (query.data.response_code === 0) {
      query?.data.data.forEach((item, i) => {
        dataTransformed[i] = {
          error: false,
          question: item.question,
          answers: [item.correct_answer, ...item.incorrect_answers],
          correctAnswer: [item.correct_answer],
          difficulty: item.difficulty,
          category: item.category,
        };
      });

      // map over dataTransformed and shuffle the answers
      dataTransformed.map((item) => {
        item.answers = item.answers.sort(() => Math.random() - 0.5);
      });
    }

    if (query.data.response_code === 1) {
      dataTransformed = {
        error: true,
        message: query.data,
      };
    }

    if (query.data.response_code === 2) {
      dataTransformed = {
        error: true,
        message: query.data,
      };
    }
  }

  return {
    ...query,
    data: useMemo(() => dataTransformed, [query.data]),
  };
};

export default useQuiz;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetQueriesParams, useQuiz } from '../hooks';
import { Error, ShowQuestion } from '../components';
import { showCorrectAnswers } from '../helper';

const Quiz = () => {
  const { url, urlQueries } = useGetQueriesParams();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswers, setSelectedAnswer] = useState([]);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const { data: quiz } = useQuiz(url);

  const { amount } = urlQueries;

  useEffect(() => {
    parseInt(amount) <= questionNumber &&
      navigate('/result', { state: { counter: counter } });
  }, [counter, questionNumber]);

  const onNextQuestion = (correctAnswer) => {
    if (JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswer)) {
      setSelectedAnswer([]);
      setCounter(counter + 1);
    } else {
      showCorrectAnswers(correctAnswer);
      setSelectedAnswer([]);
    }
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
    }, 1500);
  };

  const onSelecteAnswer = (answer) => {
    if (selectedAnswers.includes(answer)) {
      document.getElementById(answer).classList.remove('selected');
      setSelectedAnswer(selectedAnswers.filter((a) => a !== answer));
    } else {
      document.getElementById(answer).classList.add('selected');
      setSelectedAnswer([...selectedAnswers, answer]);
    }
  };

  return (
    <>
      {quiz &&
        !quiz.error &&
        quiz.map((question, i) => {
          if (i === questionNumber) {
            return (
              <ShowQuestion
                key={i}
                data={question}
                onSelecteAnswer={onSelecteAnswer}
                onNextQuestion={onNextQuestion}
                questionNumber={questionNumber}
                amount={amount}
              />
            );
          }
          return null;
        })}
      {quiz && quiz.error && <Error message={quiz.message.data} />}
    </>
  );
};

export default Quiz;

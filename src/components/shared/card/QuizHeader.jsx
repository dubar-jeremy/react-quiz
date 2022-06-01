import './card.css';
import headerQuiz from '../../../img/header-quiz.svg';
const QuizHeader = ({ children }) => {
  return (
    <div className='quiz-header'>
      <p className='quiz-header-title'>{children}</p>
      <img src={headerQuiz} alt='quiz' />
    </div>
  );
};

export default QuizHeader;

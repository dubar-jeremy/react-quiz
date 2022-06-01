import Button from '../shared/button/Button';
import Card from '../shared/card/Card';
import CardBody from '../shared/card/CardBody';
import CardFooter from '../shared/card/CardFooter';
import QuizHeader from '../shared/card/QuizHeader';
import CardTitle from '../shared/card/CardTitle';
import { htmlEntities } from '../../helper';

const ShowQuestion = ({
  data,
  onSelecteAnswer,
  onNextQuestion,
  questionNumber,
  amount,
}) => {
  return (
    <>
      <QuizHeader>
        {data.category} {`(${questionNumber + 1} / ${amount})`}
      </QuizHeader>
      <Card>
        <CardBody>
          <CardTitle>{htmlEntities(data.question)}</CardTitle>
          {data.answers.map((answer, i) => {
            return (
              <Button
                key={i}
                id={htmlEntities(answer)}
                value={htmlEntities(answer)}
                onClick={(e) => onSelecteAnswer(e.target.value)}
                size='lg'
                color='primary'
              />
            );
          })}
          <CardFooter>
            <Button
              onClick={() => onNextQuestion(data.correctAnswer)}
              value='next'
              size='md'
              className='footer-button'
            />
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
};

export default ShowQuestion;

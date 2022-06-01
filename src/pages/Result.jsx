import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/shared/button/Button';
import Card from '../components/shared/card/Card';
import CardBody from '../components/shared/card/CardBody';
import headerResult from '../img/result.svg';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { counter } = location.state;
  return (
    <>
      <Card>
        <CardBody className={'card-result'}>
          <p className='card-results-title'>Results</p>
          <p className='card-results-p'>
            You got <span className='card-results-count'>{counter}</span>{' '}
            correct {counter > 1 ? `answers` : `answer`}
          </p>
          <img src={headerResult} alt='quiz' className='results-img' />
          <Button
            value='try again'
            size='md'
            className='footer-button'
            onClick={() => navigate('/')}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Result;

import { useNavigate } from 'react-router-dom';
import Button from '../shared/button/Button';
import Card from '../shared/card/Card';
import CardBody from '../shared/card/CardBody';
import './error.css';

const Error = ({ message }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Card>
      <CardBody>
        <div className='error'>
          <p>{message}</p>
        </div>
        <Button onClick={onClick} size='lg' value='Try again' />
      </CardBody>
    </Card>
  );
};

export default Error;

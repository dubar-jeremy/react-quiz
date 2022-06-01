import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Select, Form, Button } from '../components';
import { queryBuilder, filterUserChoices } from '../helper';
import { useGetCategories } from '../hooks';
import { amountOptions, difficultyOptions, typeOptions } from '../service/data';

const Home = () => {
  const [options, setOptions] = useState({
    category: '',
    amount: '10',
    difficulty: '',
    type: '',
  });

  const { data: categories } = useGetCategories();

  const navigate = useNavigate();

  const onSubmit = () => {
    const userChoices = filterUserChoices(options);
    const queries = queryBuilder(userChoices);
    navigate(`/quiz?${queries}`);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setOptions(() => ({
      ...options,
      [name]: value,
    }));
  };

  return (
    <>
      {categories && (
        <Card>
          <CardBody>
            <Form onChange={onChange}>
              <Select
                label={'Amount'}
                name={'amount'}
                id={'amount'}
                options={amountOptions}
                defaultValue={options.amount}
              />
              <Select
                label={'Any category'}
                name={'category'}
                id={'category'}
                options={categories.data.trivia_categories}
                defaultValue={options.category}
              />
              <Select
                label={'Any difficulty'}
                name={'difficulty'}
                id={'difficulty'}
                options={difficultyOptions}
                defaultValue={options.difficulty}
              />

              <Select
                label={'Any type'}
                name={'type'}
                id={'type'}
                options={typeOptions}
                defaultValue={options.type}
              />

              <Button value='start' size='xlg' onClick={onSubmit} />
            </Form>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Home;

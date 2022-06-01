import { useSearchParams } from 'react-router-dom';
import { queryBuilder } from '../helper';

const useGetQueriesParams = () => {
  const [searchParams] = useSearchParams();

  const urlQueries = {};

  for (let [key, value] of searchParams.entries()) {
    urlQueries[key] = value;
  }

  const url = queryBuilder(urlQueries);

  return {
    url,
    urlQueries,
  };
};

export default useGetQueriesParams;

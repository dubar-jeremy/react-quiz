import { useQuery } from 'react-query';
import { getCategories } from '../service/api';

const useGetCategories = () => {
  return useQuery(['getCategories'], () => getCategories());
};

export default useGetCategories;

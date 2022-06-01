import { API } from '../config/api.config';

export const getQuiz = async (url) => {
  try {
    const data = await API.get(`api.php?${url}`);

    if (data.data.response_code === 1) {
      return {
        data: "Could not return results. The API doesn't have enough questions for your query",
        response_code: 1,
      };
    }

    if (data.data.response_code === 2) {
      return {
        data: "Contains an invalid parameter. Arguements passed in aren't valid",
        response_code: 2,
      };
    }

    return {
      data: data.data.results,
      response_code: 0,
    };
  } catch (error) {
    return error;
  }
};

export const getCategories = async () => await API.get(`api_category.php`);

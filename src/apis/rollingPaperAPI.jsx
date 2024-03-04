import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const getRequest = async endPoint => {
  try {
    const response = await axios.get(`${BASE_URL}${endPoint}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMessage = async id => {
  return getRequest(`${id}/messages/`);
};

import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const getRequest = async endPoint => {
  try {
    const response = await axios.get(`${BASE_URL}${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRollingPaper = async id => {
  return getRequest(`${id}/`);
};

export const getMessage = async id => {
  const response = await getRequest(`${id}/messages/`);
  return response.results;
};

import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getRecentApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=100`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=100&sort=like`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

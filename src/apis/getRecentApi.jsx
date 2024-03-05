import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getRecentApi = async offset => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=4&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotApi = async offset => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=4&sort=like&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataLength = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

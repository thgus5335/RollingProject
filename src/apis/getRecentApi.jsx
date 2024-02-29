import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/1-7/';

export const getRecentApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/?limit=4&offset=1`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/?limit=4&offset=1&sort=like`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

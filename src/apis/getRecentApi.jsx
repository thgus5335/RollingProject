import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/1-7/';

export const getRecentApi = async offset => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/?limit=4&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHotApi = async offset => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/?limit=4&sort=like&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataLength = async () => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

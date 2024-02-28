import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app/1-7/';

const getRecentApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}recipients/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecentApi;

import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const createMessageApi = async (submitInfo, id) => {
  console.log(submitInfo, id);
  try {
    const response = await axios.post(`${BASE_URL}${id}/messages/`, submitInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const getRecipient = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

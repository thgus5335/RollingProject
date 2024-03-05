import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getUserData = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

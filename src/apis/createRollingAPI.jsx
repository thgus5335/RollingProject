import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const postRolling = async postData => {
  try {
    console.log('Sending request with data:', postData);
    const response = await axios.post(BASE_URL, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Success:', response.data.id);

    return response.data.id;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);

    throw error;
  }
};

export default postRolling;

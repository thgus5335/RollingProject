import axios from 'axios';
const API_URL = 'https://rolling-api.vercel.app/4-13/recipients/';

export const postRolling = async postData => {
  try {
    console.log('Sending request with data:', postData);
    const response = await axios.post(API_URL, postData, {
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

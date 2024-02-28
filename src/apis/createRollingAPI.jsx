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

export const getUserId = async userName => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Success:', response.data.results);

    const user = response.data.results.find(user => user.name === userName);

    if (user) {
      // Return the corresponding user ID if found
      return user.id;
    } else {
      // Handle the case where the user with the given name is not found
      console.error('User not found for name:', userName);
      return null;
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);

    throw error;
  }
};

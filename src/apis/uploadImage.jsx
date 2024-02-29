import axios from 'axios';

const API_URL = 'https://api.imgur.com/3/image';

const uploadImage = async ({ file }) => {
  const clientId = 'fd2e1e3d3d12ce1';
  const auth = 'Client-ID ' + clientId;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        Authorization: auth,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Success:', response.data);

    // Extract the image URL from the response
    const imageUrl = response.data.data.link;

    return imageUrl;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default uploadImage;

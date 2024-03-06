import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { DELETE_URL } from '../constants/constants';

const getRequest = async endPoint => {
  try {
    const response = await axios.get(`${BASE_URL}${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const postRequest = async endPoint => {
  try {
    const response = await axios.post(`${BASE_URL}${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteRequest = async endPoint => {
  try {
    const response = await axios.delete(`${DELETE_URL}${endPoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRollingPaper = async recipientId => {
  return getRequest(`${recipientId}/`);
};

export const getMessage = async recipientId => {
  const response = await getRequest(`${recipientId}/messages/`);
  return response.results;
};

export const deleteRollingPaper = async recipientId => {
  return deleteRequest(`recipients/${recipientId}/`);
};

export const deleteMessage = async messageId => {
  return deleteRequest(`messages/${messageId}/`);
};

export const postReaction = async recipientId => {
  return postRequest(`${recipientId}/reactions/`);
};

export const getReaction = async recipientId => {
  return getRequest(`${recipientId}/reactions/`);
};

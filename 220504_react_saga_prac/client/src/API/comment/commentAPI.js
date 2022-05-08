import axios from 'axios';

export const commentAddApi = async (payload) => {
  const url = 'http://localhost:4000/api/comment/write';
  const response = await axios.post(url, payload);

  return response.data;
};

export const commentReadAPI = async () => {
  const url = 'http://localhost:4000/api/comment/read';
  const response = await axios.post(url);

  return response.data;
};

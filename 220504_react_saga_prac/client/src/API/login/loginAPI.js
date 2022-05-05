import axios from 'axios';

const loginAPI = async (payload) => {
  const url = 'http://localhost:4000/api/login';
  const response = await axios.post(url, payload);

  return response.data;
};

export default loginAPI;

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem('accessToken');

export const getBoardApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/boards`);
  return response.data;
};

export const getBoardIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/boards/${id}`);
  return response.data;
};

export const fixBoardIdApi = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/api/boards/${id}`, data, {
    headers: {
      Authorization: accessToken,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteBoardIdApi = async (id) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axios.delete(`${BASE_URL}/api/boards/${id}`, {
    headers: {
      Authorization: accessToken,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const countHeartApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/hearts/${payload.id}`, accessToken, {
    headers: {
      Authorization: accessToken,
      'Content-Type': 'application/json',
    },
  });
};

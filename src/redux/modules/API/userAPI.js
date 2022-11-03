import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER;
const accessToken = localStorage.getItem('accessToken');

export const postUserApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/auth/signup`, payload);
};

export const loginUserApi = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);
  return response;
};

export const getUsernameInfoApi = async (token) => {
  const response = await axios.get(`${BASE_URL}/api/mypage/userinfo/username`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

export const getNicknameInfoApi = async (token) => {
  const response = await axios.get(`${BASE_URL}/api/mypage/userinfo/nickname`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

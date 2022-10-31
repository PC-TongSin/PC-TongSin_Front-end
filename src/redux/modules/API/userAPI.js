import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
const accessToken = localStorage.getItem("accessToken")

export const postUserApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/auth/signup`, payload);
};

export const loginUserApi = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);
  return response
};

export const getUsernameInfoApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/mypage/userinfo/username`, {
    headers: {
      Authorization: accessToken,
    }
  });
  return response
};

export const getNicknameInfoApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/mypage/userinfo/nickname`, {
    headers: {
      Authorization: accessToken,
    }
  });
  return response
};
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const postUserApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/auth/signup`, payload);
};

export const loginUserApi = async (payload) => {
  console.log(payload);
  const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);
  return response
}
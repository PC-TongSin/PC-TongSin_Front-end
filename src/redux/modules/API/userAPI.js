import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const postUserApi = async (payload) => {
  console.log(payload)
  await axios.post(`http://118.40.172.207:8080/api/auth/signup`, payload);
};
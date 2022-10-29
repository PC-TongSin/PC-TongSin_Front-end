import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem("accessToken")

export const getBoardApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/boards`);
  return response.data
};

export const getBoardIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/boards/${id}`);
  return response.data;
};

export const countHeartApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/hearts/${payload}`, {
    headers: {
      Authorization: accessToken,
    }
  })
};
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const getBoardApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/boards`);
  return response.data
};

export const getBoardIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/boards/${id}`);
  return response.data;
}
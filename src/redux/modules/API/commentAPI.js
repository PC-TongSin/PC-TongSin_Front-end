import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const addCommentApi = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/comments`, payload, {
    headers: {

    }
  });
  return response.data
};
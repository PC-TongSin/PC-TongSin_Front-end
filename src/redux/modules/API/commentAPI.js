import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem("accessToken")

export const addCommentApi = async (payload) => {
  console.log(payload)
  console.log("토큰값임", accessToken)
  const response = await axios.post(`${BASE_URL}/api/comments`, payload, {
    headers: {
      Authorization: accessToken
    }
  });
  return response.data
};
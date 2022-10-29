import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem("accessToken")

export const addCommentApi = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/comments`, payload, {
    headers: {
      Authorization: accessToken
    }
  });
  return response.data
};

export const delCommentApi = async (payload) => {
  await axios.delete(`${BASE_URL}/api/comments/${payload}`, {
    headers: {
      Authorization: accessToken,
    }
  })
};

export const editCommentApi = async (payload) => {
  await axios.put(`${BASE_URL}/api/comments/${payload.id}`, payload.content, {
    headers: {
      Authorization: accessToken,
    }
  })
};
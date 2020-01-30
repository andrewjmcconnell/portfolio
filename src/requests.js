const axios = require("axios");
const apiUrl = "https://pixabay.com/api";

export const getPhotos = () =>
  axios.get(`${apiUrl}/?key=15078796-6921f6e8624b61fd10df0f302`);
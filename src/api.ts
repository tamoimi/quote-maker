import axios from "axios";

export const getQuotes = async () => {
  const options = {
    method: "GET",
    url: "https://api.adviceslip.com/advice",
  };

  const response = await axios.request(options);
  return response.data;
};

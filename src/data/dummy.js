import axios from "axios";

export const getDummy = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/?limit=0`);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

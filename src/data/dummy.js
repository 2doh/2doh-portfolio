import axios from "axios";

export const getDummy = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/?limit=0`);
    return res.data;
  } catch (error) {
    alert("데이터를 불러오는데 실패했습니다.");
  }
};

import axios from "axios";

export const fetchProductApi = () => {
  return axios.get("http://localhost:8080/products");
};

import axios from "axios";

export const fetchCartItemsApi = () => {
  return axios.get("http://localhost:8080/cart");
};

export const addCartItemsApi = (item) => {
  return axios.post("http://localhost:8080/cart", item);
};

export const deleteCartItemsApi = (id) => {
  return axios.delete(`http://localhost:8080/cart/${id}`);
};

export const updateCartItemsApi = ( id, updateItem ) => {
  console.log("request===>,", id, updateItem);
  return axios.patch(`http://localhost:8080/cart/${id}`, updateItem);
};

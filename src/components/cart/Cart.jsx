import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAsyncCartItems,
  fetchAsyncCartItems,
  updateAsyncCartItems,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  useEffect(() => {
    dispatch(fetchAsyncCartItems());
  }, []);
  const changeHandler = (e, id) => {
    dispatch(
      updateAsyncCartItems({
        id,
        changeQuantity: { quantity: +e.target.value },
      })
    );
  };
  return (
    <div className="m-4 max-w-md mx-auto">
      {items.map((item) => (
        <div className="m-2 flex justify-between items-center px-2 max-w-md rounded overflow-hidden shadow-lg bg-gray-500">
          <img className="w-24 h-24" src={item.thumbnail} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-sm text-white mb-2">
              {item.title}
            </div>
            <span className="text-gray-900 font-bold text-xl text-white">
              ${item.price}
            </span>
          </div>
          <div className="px-6 py-4">
            <select
              name="quantity"
              id=""
              value={item.quantity}
              onChange={(e) => changeHandler(e, item.id)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={() => dispatch(deleteAsyncCartItems(item.id))}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 text-xs"
            >
              remove item
            </button>
          </div>
        </div>
      ))}

      <div className="m-2 p-2 flex justify-between items-center px-2 max-w-md rounded overflow-hidden shadow-lg bg-gray-500">
        <p className="text-md font-bold text-white text-center">
          Total :
          {items.reduce((acc, item) => {
            return item.price * item.quantity + acc;
          }, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;

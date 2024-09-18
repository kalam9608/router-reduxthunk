import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncCartItems, fetchAsyncCartItems } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  useEffect(() => {
    dispatch(fetchAsyncCartItems());
  }, []);
  return (
    <div className="m-4 max-w-md mx-auto">
      {items.map((item) => (
        <div className="m-2 flex justify-between items-center px-2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-500">
          <img className="w-24 h-24" src={item.thumbnail} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-sm text-white mb-2">
              {item.title}
            </div>
            <span className="text-gray-900 font-bold text-xl text-white">
              ${item.price}
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button onClick={()=>dispatch(deleteAsyncCartItems(item.id))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 text-xs">
              remove item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

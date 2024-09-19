import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProduct } from "./productSlice";
import { addAsyncCartItems } from "../cart/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchAsyncProduct());
  }, []);

  const changeHandler = (e) => {
    setQuantity(+e.target.value);
  };
  return (
    <div className="m-4 max-w-md mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="rounded-t-lg w-48 h-24"
              src={product.thumbnail}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              $ {product.price}
            </p>
            <div className="px-6 py-4">
              <select
                name="quantity"
                id=""
                value={quantity}
                onChange={(e) => changeHandler(e)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <button
                onClick={() => dispatch(addAsyncCartItems({...product,quantity:quantity}))}
                className="mx-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const BtnAddToCart = (props) => {
  const dispatch = useDispatch();
  let product = props.product;
  let selectedColor = props.selectedColor;
  let quantity = props.quantity ? props.quantity : 1;
  product = { ...props.product, selectedColor, quantity: quantity };
  return (
    <NavLink
      to="/cart"
      onClick={() => {
        dispatch(addToCart(product));
      }}
    >
      <button
        type="button"
        className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg "
      >
        Add to Cart
      </button>
    </NavLink>
  );
};

export default BtnAddToCart;

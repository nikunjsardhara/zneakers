import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeToCart } from "../slices/cartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
  totalChecker,
} from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartIteam = useSelector((state) => {
    return state.cart;
  });
  let cart = cartIteam.cart;
  let total = 0;
  cart.map((cart) => {
    total = total + cart.quantity * cart.price;
    return total;
  });
  console.log(cart);
  return (
    <>
      <div className="flex w-full">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart?.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Color
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>
          {cart.map((cart) => {
            return (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={cart?.colors[cart.selectedColor].src}
                      alt={cart?.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 my-2 flex-grow">
                    <span className="font-bold text-sm">{cart.title}</span>
                    {/* <span className="text-red-500 text-xs">Shoes</span> */}
                    <span
                      onClick={() => dispatch(removeToCart(cart))}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <div class="block p-1 border-2 hover:border-gray-500 rounded-full w-fit transition ease-in duration-300 border-gray-500 ml-3">
                    <div
                      class="block w-6 h-6 rounded-full"
                      // style="background-color: rgb(234, 5, 58);"
                      style={{
                        backgroundColor: `${
                          cart?.colors[cart?.selectedColor].code
                        }`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    onClick={() => dispatch(decreaseQuantity(cart))}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={cart.quantity}
                  />

                  <svg
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    onClick={() => dispatch(increaseQuantity(cart))}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${cart.price * cart.quantity}
                </span>
              </div>
            );
          })}
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          {cart.map((cart, i) => {
            return (
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Item {i + 1}
                </span>
                <span className="font-semibold text-sm">
                  {cart.price * cart.quantity}$
                </span>
              </div>
            );
          })}
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg w-20">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${total}</span>
            </div>
            <NavLink
              to="/checkout"
              onClick={() => {
                dispatch(totalChecker(total));
              }}
            >
              <button className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg ">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

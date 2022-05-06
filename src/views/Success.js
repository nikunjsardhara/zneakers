import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdDateRange } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../scss/success.css";
import { clearCart } from "../slices/cartSlice";

function Success() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const cartIteam = useSelector((state) => {
    return state.cart;
  });
  let cart = cartIteam.cart;
  let total = 0;
  cart.map((cart) => {
    total = total + cart.quantity * cart.price;
    return total;
  });
  let quantity = 0;
  cart.map((cart) => {
    quantity = quantity + cart.quantity;
    return quantity;
  });

  const handleSuccess = (cart) => {
    cart = [];
    console.log(cart);
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      <div className="head">
        <section>
          <div className="header">
            <h1>Thank you for your purchase!</h1>
            <div id="svg">
              <BsCheckLg />
            </div>
          </div>
          <div className="middle">
            <h2>Hello Rahul Mangukiya,</h2>
            <p>
              Thank you for purchasing from our store.A link to track its
              progress has been sent to your email address.
            </p>
            <br />
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <FaUserAlt />
                    Order ID
                  </th>
                  <td class="px-6 py-4">
                    <span>5234234e22k3mer23</span> <FiCopy />
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <MdDateRange />
                    Order Date
                  </th>
                  <td class="px-6 py-4">{date}</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <FaShippingFast />
                    Shipping Address
                  </th>
                  <td class="px-6 py-4">
                    69,Shivaji Chowk, Jawahar Darshan, Daftary Rd, Malad (east)
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <FaCity />
                    City
                  </th>
                  <td class="px-6 py-4">Mumbai</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <BiPhoneCall />
                    Phone Number
                  </th>
                  <td class="px-6 py-4">02228835789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-center">
                    Product Details
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cart) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row">
                        <div class="flex">
                          <div class="w-20 ml-4">
                            <img
                              class="h-24"
                              src={cart.colors[cart.selectedColor].src}
                              alt={cart.title}
                            />
                          </div>
                          <div class="flex flex-col justify-evenly ml-4 flex-grow">
                            <span class="font-bold text-sm">{cart.title}</span>
                            {/* <span class="text-red-500 text-xs">Shoes</span> */}
                          </div>
                        </div>
                      </th>
                      <td class="px-6 py-4 text-center flex justify-center items-center mt-3 h-full">
                        <div class="block p-1 border-2 hover:border-gray-500 rounded-full w-fit transition ease-in duration-300 border-gray-500">
                          <div
                            class="block w-6 h-6 rounded-full"
                            // style="background-color: rgb(234, 5, 58);"
                            style={{
                              backgroundColor: `${
                                cart.colors[cart.selectedColor].code
                              }`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-center">{cart.quantity}</td>
                      <td class="px-6 py-4 text-center">
                        ${cart.quantity * cart.price}
                      </td>
                    </tr>
                  );
                })}
                <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <th scope="row">
                    <div class="flex"></div>
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4 text-center">{quantity}</td>
                  <td class="px-6 py-4 text-center">${total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <NavLink to="/"> */}
          <button
            type="button"
            onClick={() => handleSuccess(cart)}
            className="py-2 px-4 mt-10  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg "
          >
            Continue Shopping
          </button>
          {/* </NavLink> */}
        </section>
      </div>
    </>
  );
}

export default Success;

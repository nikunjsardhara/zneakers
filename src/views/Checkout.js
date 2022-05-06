import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "../validators/checkout_validator";
import { useNavigate } from "react-router-dom";
import Cleave from "cleave.js/react";
// import { addToCart } from "../slices/cartSlice";
const Checkout = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const cartIteam = useSelector((state) => {
  //   return state.cart;
  // });
  // let cart = cartIteam.cart;

  const total = useSelector((state) => {
    return state.cart.total;
  });
  // console.log(cart);

  new Cleave(".card_cleave", {
    creditCard: true,
    delimiters: "-",
  });
  const CustomInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors },
    ...props
  }) => (
    <div>
      <Cleave
        placeholder="Enter your credit card number"
        options={{ creditCard: true, delimiter: "-" }}
        {...field}
        {...props}
      />
    </div>
  );
  const expiration = ({ field, form: { touched, errors }, ...props }) => (
    <div>
      <Cleave
        placeholder="Enter your credit card number"
        options={{ date: true, datePattern: ["m", "y"] }}
        {...field}
        {...props}
      />
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex min-h-screen p-4 bg-transparent justify-center w-fit leading-loose mx-auto">
        <Formik
          initialValues={{
            name: "",
            email: "",
            address: "",
            city: "",
            country: "",
            zip: "",
            card_number: "",
            expiry_date: "",
            cvc: "",
          }}
          validationSchema={validate.validate}
          onSubmit={(value) => {
            console.log(value);
            // cart = [];
            // dispatch(addToCart(cart));
            navigate("/success");
          }}
        >
          {({ errors, touched }) => (
            <Form className="max-w-lg m-4 p-6 bg-white rounded shadow-xl w-fit h-fit">
              <p className="text-gray-800 font-medium">Customer information</p>
              <div className="mt-2">
                <label className="block text-sm text-gray-600" for="name">
                  Name
                </label>
                {/* <input
                  className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  required=""
                  placeholder="Your Name"
                  aria-label="Name"
                /> */}
                {errors.name && touched.name ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                )}
                {errors.name && touched.name ? (
                  <div className="text-red-500 text-xs">{errors.name}</div>
                ) : null}
              </div>
              <div className="mt-2 mb-2">
                <label className="block text-sm text-gray-600" for="email">
                  Email
                </label>
                {errors.email && touched.email ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    aria-label="Email"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="email"
                    name="email"
                    placeholder="Email"
                    aria-label="email"
                  />
                )}
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-xs">{errors.email}</div>
                ) : null}
              </div>
              <div className="mt-2 mb-2">
                <label className=" block text-sm text-gray-600" for="address">
                  Address
                </label>
                {errors.address && touched.address ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="address"
                    name="address"
                    placeholder="Address"
                    aria-label="Address"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="address"
                    name="address"
                    placeholder="Address"
                    aria-label="Address"
                  />
                )}

                {errors.address && touched.address ? (
                  <div className="text-red-500 text-xs">{errors.address}</div>
                ) : null}
              </div>
              <div className="mt-2 ">
                <label
                  className="hidden text-sm block text-gray-600"
                  for="city"
                >
                  City
                </label>
                {errors.city && touched.city ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="city"
                    name="city"
                    placeholder="City"
                    aria-label="city"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="city"
                    name="city"
                    placeholder="City"
                    aria-label="city"
                  />
                )}

                {errors.city && touched.city ? (
                  <div className="text-red-500 text-xs">{errors.city}</div>
                ) : null}
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label
                  className="hidden block text-sm text-gray-600"
                  for="country"
                >
                  Country
                </label>
                {errors.country && touched.country ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="country"
                    name="country"
                    placeholder="Country"
                    aria-label="Country"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="country"
                    name="country"
                    placeholder="Country"
                    aria-label="Country"
                  />
                )}

                {errors.country && touched.country ? (
                  <div className="text-red-500 text-xs">{errors.country}</div>
                ) : null}
              </div>
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label className="hidden block text-sm text-gray-600" for="zip">
                  Zip
                </label>
                {errors.zip && touched.zip ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="zip"
                    name="zip"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="zip"
                    name="zip"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                )}

                {errors.zip && touched.zip ? (
                  <div className="text-red-500 text-xs">{errors.zip}</div>
                ) : null}
              </div>
              <p className="mt-4 text-gray-800 font-medium">
                Payment information
              </p>
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  for="card_number"
                >
                  Card
                </label>
                {errors.card_number && touched.card_number ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500 card_cleave"
                    id="card_number"
                    name="card_number"
                    placeholder="0000 0000 0000"
                    aria-label="Card Number"
                    component={CustomInput}
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded card_cleave"
                    id="card_number"
                    name="card_number"
                    placeholder="0000 0000 0000 0000"
                    aria-label="Card Number"
                    component={CustomInput}
                  />
                )}
                {errors.card_number && touched.card_number ? (
                  <div className="text-red-500 text-xs">
                    {errors.card_number}
                  </div>
                ) : null}
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label className="text-sm text-gray-600" for="expiry_date">
                  Expire date
                </label>
                {errors.expiry_date && touched.expiry_date ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="expiry_date"
                    name="expiry_date"
                    placeholder="MM/YYYY"
                    aria-label="Expire date"
                    component={expiration}
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="expiry_date"
                    name="expiry_date"
                    placeholder="MM-YY"
                    aria-label="Expire date"
                    component={expiration}
                  />
                )}

                {errors.expiry_date && touched.expiry_date ? (
                  <div className="text-red-500 text-xs">
                    {errors.expiry_date}
                  </div>
                ) : null}
              </div>
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label className="text-sm text-gray-600" for="cvc">
                  CVC
                </label>

                {errors.cvc && touched.cvc ? (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded border border-red-500"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    aria-label="CVC"
                  />
                ) : (
                  <Field
                    className="w-full py-1 px-3 text-gray-700 bg-gray-200 rounded"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC"
                    aria-label="CVC"
                  />
                )}
                {errors.cvc && touched.cvc ? (
                  <div className="text-red-500 text-xs">&nbsp;{errors.cvc}</div>
                ) : null}
              </div>
              <p className="mt-4 text-gray-800 font-medium">
                Total : ${total}.00
              </p>
              <div className="mt-4">
                {/* <NavLink to="/success"> */}
                <button
                  className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg "
                  type="submit"
                  // onClick={() => {
                  //   navigate("/success");
                  // }}
                >
                  Pay now
                </button>
                {/* </NavLink> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default Checkout;

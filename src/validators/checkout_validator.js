import * as yup from "yup";
const validate = () => 
  yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    country: yup.string().required("Required"),
    zip: yup.string().label("zip-code").required("Required"),
    card_number: yup.string().label("Card number").min(19,"Minimum 16").max(19,"Minimum 16").required("Required"),
    expiry_date: yup
      .string()
      .label("MM/YY")
      .min(5,"MM/YY format!")
      .max(5,"MM/YY format!")
      .required("Required"),
    cvc: yup.string().min(3).max(4).required("Required"),
  });

export default { validate };

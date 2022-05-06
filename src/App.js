import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import Product from "./views/Product";
import LoggedOutLayout from "./layouts/LoggedOutLayout";
import { Provider } from "react-redux";
import Success from "./views/Success";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoggedOutLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import Product from './views/Product';
import LoggedOutLayout from './layouts/LoggedOutLayout';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoggedOutLayout />} >
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </Provider>
    </>
  );
}

export default App;

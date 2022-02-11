import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const BtnAddToCart = (product) => {
    const dispatch = useDispatch();
    return (
        <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg " onClick={() => { dispatch(addToCart(product.product)) }}>
            Add to Cart
        </button>
    )
}

export default BtnAddToCart
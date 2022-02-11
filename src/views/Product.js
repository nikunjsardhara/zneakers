import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import products from './../products';
import BtnAddToCart from './../components/BtnAddToCart'
const Product = () => {
    const { id } = useParams();
    const product = products.filter(p => p.id == id)[0];
    const [selectedColor, setSelectedColor] = useState(0);
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className="md:flex md:items-center w-full mt-8">
                <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.colors[selectedColor].src} alt="Nike Air" />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">{product.title}</h3>
                    <span className="text-gray-500 mt-3 font-bold">${product.price}</span>
                    <hr className="my-3" />
                    <div className="mt-2">
                        <label className="text-gray-700 text-sm" for="count">Quantity:</label>
                        <div className="flex items-center mt-1">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => { setQuantity(quantity - 1) }} disabled={quantity < 2}>
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 text-lg mx-2">{quantity}</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => { setQuantity(quantity + 1) }}>
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Color:</label>
                        <div className="flex items-center mt-1">
                            <ul className="flex flex-row justify-center items-center">
                                {
                                    product.colors.map((color, i) => {
                                        return <li className="mr-4 last:mr-0">
                                            <span className={"block p-1 border-2 hover:border-gray-500 rounded-full transition ease-in duration-300 " + (i === selectedColor ? "border-gray-500" : "")}>
                                                <a onClick={() => { setSelectedColor(i) }} style={{ backgroundColor: color.code }} className="block w-6 h-6 rounded-full cursor-pointer">
                                                </a>
                                            </span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 w-40">
                        <BtnAddToCart product={product} />
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-700 text-sm" for="count">Description:</label>
                        <div className="flex items-center mt-1">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import BtnAddToCart from './BtnAddToCart';
const ProductListItem = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(0);
    return (
        <div className="w-72 flex justify-center items-center">
            <div className="w-full p-4">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <NavLink to={`/product/${product.id}`} className="inline-block py-4 md:py-0">
                            <p className="text-xl uppercase text-gray-900 font-bold">
                                {product.title}
                            </p>
                            <p className="h-12 text-ellipsis text-sm">
                                {product.description}
                            </p>
                        </NavLink>
                    </div>
                    <div className="prod-img">
                        <img src={product.colors[selectedColor].src} className="w-full object-cover object-center" />
                    </div>
                    <div className="prod-info grid gap-10">
                        <div>
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
                        <div className="flex flex-col md:flex-col justify-between items-center text-gray-900">
                            <div className='font-bold'>${product.price}</div>
                            <BtnAddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListItem
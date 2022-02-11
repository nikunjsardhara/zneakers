import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const cart = useSelector((state) => state.cart);

    return <div>
        <nav className="relative z-50 h-24 select-none " >
            <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                <div className="flex items-center justify-start w-1/4 h-full pr-4">

                    <NavLink to="/" className="inline-block py-4 md:py-0">
                        <span className="p-1 text-xl font-black leading-none text-gray-900"><span>zneakers</span><span className="text-indigo-600">.</span></span>
                    </NavLink>

                </div>
                <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                    <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <a href="#_" className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span className="text-indigo-600">.</span></a>
                        <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            {/* {
                                links.map(link =>
                                    <NavLink key={link.href} to={link.href} className={({ isActive }) =>
                                        isActive ? 'text-indigo-600' : 'text-gray-700'
                                    }>{link.text}</NavLink>
                                )
                            } */}

                            {/* Nav links goes here */}
                            <SearchBar />
                        </div>
                        <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                            <NavLink to="/cart" className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                {
                                    cart.length &&
                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cart.length}</span>
                                }

                            </NavLink>

                        </div>
                    </div>
                </div>
                <div onClick={() => { setShowMenu(!showMenu); }} className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                    {
                        !showMenu && (
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )
                    }

                    {
                        showMenu && (
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        )
                    }

                </div>
            </div>
        </nav >
    </div >;
};


export default Header;

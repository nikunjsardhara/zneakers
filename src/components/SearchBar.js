import React from 'react'
const SearchBar = () => {
    return (
        <>
            <div className="pt-2 relative mx-auto text-gray-600">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 29 29" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default SearchBar
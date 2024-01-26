'use client'

import Link from 'next/link';
import React, { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';

interface NavbarProps {
    onSearch?: (query: string, category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
    const item = useSelector((state: any) => state.cart)
    console.log('item: ', item);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery, selectedCategory);
        } else {
            console.log('Search Query:', searchQuery);
        }
    };

    const handleCategoryClick = (category: string) => {
        if (category == "null") {
            setSelectedCategory('');
            if (onSearch) {
                onSearch(searchQuery, "");
            }
        }else{
            setSelectedCategory(category);
            if (onSearch) {
                onSearch(searchQuery, category);
            } else {
                console.log('Search Query:', searchQuery);
                console.log('Selected Category:', category);
            }
        }
    };
    return (
        <nav className="">
            <div className="flex items-center justify-between container mx-auto">
                <Link href={"/"} className="text-2xl font-semibold playfiar-dispay-font" onClick={() => handleCategoryClick("null")}>Ecommerence</Link>
                <ul className="flex text-[15px] font-medium cursor-pointer gap-x-[16px]">
                    <li className='text-[15px]' onClick={() => handleCategoryClick("men's clothing")}>men's clothing</li>
                    <li className='text-[15px]' onClick={() => handleCategoryClick("women's clothing")}>women's clothing</li>
                    <li className='text-[15px]' onClick={() => handleCategoryClick('jewelery')}>jewelery</li>
                    <li className='text-[15px]' onClick={() => handleCategoryClick('electronics')}>electronics</li>
                </ul>
                <form onSubmit={handleSearch} className="flex items-center py-[20px] px-[19px] space-x-2 w-[414px] bg-white rounded-[20px] border border-[#D6D6D6]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white w-full h-full focus:outline-0"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>
                <Link href={"/cart"} className="bg-black w-[120px] rounded-[15px] py-[20px]  rounded flex items-center justify-center">
                    <span className='text-white mx-2'>{item?.items?.length}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 8H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
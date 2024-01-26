'use client'

import React, { Suspense } from 'react'
import { ProductData } from "../common/types"
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';

interface CardProps {
    data: ProductData;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (data: any) => {
        dispatch(addToCart(data));
    };



    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='w-[25%]  mb-[20px] px-[10px]'>
                <div className="bg-white card-box-shadow rounded-[20px]">
                    <div className="w-full cursor-pointer" >
                        <Link href={{ pathname: "/product", query: { id: data?.id } }}>
                            <div >
                                <div className="w-full p-2 rounded-[10px] w-full h-[235px]">
                                    <Image src={data?.image} alt="" width={"365"} height={"300"} className='object-contain w-full h-full rounded-[10px]' />
                                </div>
                                <div className="px-2">
                                    <div className="px-2">
                                        <p className='text-[20px] font-bold'>{data?.title?.slice(0, 17)} {data?.title?.length >= 17 && "..."}</p>
                                        <p className='text-[14px]'>{data?.category}</p>
                                        <p className='font-medium mt-2 h-[85px]'>{data?.description.slice(0, 70)} ...</p>
                                        <p className='py-3'>price : <span className='font-bold'>$ {data?.price}</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full px-5 py-2">
                        <button onClick={() => handleAddToCart(data)} className="bg-black w-full rounded-[8.4px] py-[20px]  rounded flex items-center justify-center">
                            <span className='text-white pr-2 text-[13.5] font-medium'>Add To Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 8H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Card
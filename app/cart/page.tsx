'use client'
import Navbar from '@/components/common/Navbar'
import { addToCart, removeToCart } from '@/redux/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.cart.items);
    
    const handleRemove = (id: number) => {
        dispatch(removeToCart(id));
    };

    const handleAddToCart = (data: any) => {
        dispatch(addToCart(data));
    };

    const calculateTotalPrice = () => {
        return items.reduce((total: any, item: any) => total + item.product.price * item.quantity, 0).toFixed(2);
    };

    //  // second way
    // const dispatch = useDispatch()
    // const item = useSelector((state: any) => state.cart)
    // const handleRemove = (id:any) =>{
    //     dispatch(removeToCart(id))
    // }
    // const handleAddToCart = (data:any) =>{
    //     dispatch(addToCart(data))
    // }
    return (
        <>
            <Navbar />
            <div className='container mx-auto flex mt-[50px]'>
                <div className="w-[70%]">
                    <p className="text-[20px] font-medium">Your Cart</p>
                    <div className="w-full flex items-center justify-between text-[#8B8B8B] font-medium">
                        <p className='w-[25%] items-center justify-start flex'></p>
                        <p className='w-[25%] items-center justify-start flex'>Name</p>
                        <p className='w-[25%] items-center justify-center flex'>Price</p>
                        <p className='w-[25%] items-center justify-end flex px-12'>Quantity</p>
                    </div>
                    {items?.map((data: any, i: any) => (
                        <div className="w-full flex items-center justify-between bg-white card-box-shadow rounded-[20px] my-2">
                            <div className="w-[25%] flex items-center justify-start">
                                <Image src={data?.product?.image} alt="" width={"136"} height={"119"} className='rounded-[10px] p-2 object-contain' />
                            </div>
                            <p className='w-[25%] flex items-center justify-start text-[20px] font-medium'>{data?.product?.title.slice(0,12)}...</p>
                            <p className='w-[25%] flex items-center justify-center text-[20px] font-medium'>{data?.product?.price}</p>
                            <div className="w-[25%] flex items-center justify-end px-6">
                                <button onClick={() => handleRemove(data?.product.id)} className="bg-black text-white flex items-center justify-center px-4 font-bold rounded-[5px]">-</button>
                                <span className='mx-2'>{data.quantity}</span>
                                <button onClick={() => handleAddToCart(data?.product)} className="bg-black text-white flex items-center justify-center px-4 font-bold rounded-[5px]">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[30%] pl-4 pt-14">
                    <div className="w-full p-4 h-[520px] bg-white rounded-[20px] flex flex-col justify-between cart-box-shadow">
                        <div className="w-full">
                            <p className='text-[24px] font-medium p-2'>Your Total</p>
                            <div className="w-full flex justify-between p-2">
                                <p className='font-medium'>Test Product<span className='ml-2'>X {items?.length}</span></p>
                                <p className='font-medium'>${calculateTotalPrice()}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between py-3 px-2"><p className='text-[24px] font-medium'>Total</p><p className='text-[20px] font-medium'>${calculateTotalPrice()}</p></div>
                            <button className="bg-black w-full rounded-[20px] h-[68px]  rounded flex items-center justify-center">
                                <span className='text-white font-medium font-medium'>Check out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
{/* <Image src={"/data?.image"} alt="" width={"136"} height={"119"} className='rounded-[10px] p-2 object-contain' /> */ }
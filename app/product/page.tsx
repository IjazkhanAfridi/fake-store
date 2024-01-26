"use client"
import Navbar from '@/components/common/Navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductData } from '@/components/common/types';
import { addToCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';

const page = () => {
  const [productDetail, setProductDetail] = useState<ProductData | null>(null);
  const dispatch =  useDispatch()
  const searchParam = useSearchParams()
  const param = searchParam.get("id")
  const router = useRouter();

  const handleAddToCart = (data:any) => {
    dispatch(addToCart(data));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${param}`);
        if (response.ok) {
          const data: ProductData = await response.json();
          setProductDetail(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [param]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <div className="w-[80%] mx-auto mt-[50px] mb-4">
          <p onClick={() => router?.back()} className="text-[20px] font-medium cursor-pointer">Back</p>
          <div className="flex w-full gap-[136px] mt-[40px]">
            <div className="rounded-[20px] w-[50%] bg-white max-h-[500px]">
              <Image src={productDetail.image} alt="" width={"365"} height={"300"} className='rounded-[10px] p-2 object-contain w-full h-full rounded-[10px]' />
            </div>
            <div className="w-[50%]">
              <p className='text-[32px] font-bold'>{productDetail.title}</p>
              <p className='text-[#888] text-[15px] mt-[40px]'>Category</p>
              <p className='text-[15px] font-semibold'>{productDetail?.category}</p>
              <p className='text-[#888] text-[15px] mt-[40px]'>Description: </p>
              <p className=''>{productDetail.description}</p>
              <p className='mt-[40px]'>Price</p>
              <p className='text-4xl font-semibold'>${productDetail.price}</p>
              <div className="w-full mt-[40px]">
                <button onClick={()=>handleAddToCart(productDetail)} className="bg-black w-full rounded-[20px] h-[68px]  rounded flex items-center justify-center">
                  <span className='text-white font-medium font-medium'>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
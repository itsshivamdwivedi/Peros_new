"use client"
import  { useState } from 'react'








import React from "react";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { Link } from 'react-router-dom';






const Add: React.FC<{ name: string; variant: string; image:string; size: string; price: number }> = ({ name, variant, size, image, price }) => {
  const { addToCart } = useCart();
  const router = useRouter();
  

  const handleAddToCart = () => {
    
    addToCart({ name, variant,image, size, price, quantity});
    router.push("/cart"); // Redirect to cart page
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


  return (
  
    <div className='flex flex-col gap-4'>
      <div className='flex items-center  justify-between mt-4 overflow-hidden rounded-md ring-1 ring-black md:w-[18vw] '>
        <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white"onClick={decreaseQuantity} >-</button>
       <span className=''> {quantity}</span>
        <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white" onClick={increaseQuantity}>+</button>

      </div>
      
      <div className=' sm:flex sm:flex-row gap-3 flex flex-col  '>
     
      <div><button className='w-full text-sm md:w-[18vw] disabled:bg-pink-200 disabled:text-white disabled:ring-none ring-1 bg-green-500 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-amber-400 disabled:cursor-not-allowed'
        onClick={ handleAddToCart}
        
        
        >Add to Cart </button></div>
        
      <div className=''> <Link to="/cart">  <button className='w-full md:w-[18vw] text-sm disabled:bg-pink-200 disabled:text-white bg-green-500 text-white hover:bg-amber-400 disabled:ring-none rounded-md ring-1 font-semibold ring-green-500 px-4 py-2 disabled:cursor-not-allowed '
       onClick={ handleAddToCart} >Buy it now</button></Link>   </div>
      </div>
    </div>

  );
};

export default Add;

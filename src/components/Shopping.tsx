"use client"
import React, { useState } from "react";
import { useCart } from "@/components/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();


  const textRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  // Simulate a loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 20); // Loading screen duration: 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && textRef.current) {
      // GSAP animation: move upward and fade in
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'ease out' }
      );
    }
  }, [loading]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);



  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className=" px-[10vw] h-full ">
      <h1 className="text-3xl font-serif font-bold hover:text-green-400   "   >Shopping Cart   </h1>
      <h1 className="border-b-4 w-28 border-green-500 mb-4 mt-1 " ></h1>
      {cart.length === 0 ? (
        <div className="grid w-full mt-[60vw] lg:mt-[25vw] justify-center content-center items-center font-semibold font-serif" ref={textRef}> There are no items in your cart.
        <Link to="/products" > <button className="content-center bg-green-500 ml-8 mr-8 py-2 mt-2 px-[1vw] hover:bg-amber-400 text-white rounded-md">Continue Shopping</button>
          </Link> </div>
      ) : (
        <>


<div className=" ">
         
            <ul className="hidden xl:flex xl:">
              <li className="text-2xl font-serif font-semibold">PRODUCT</li>
              <ul  className=" flex mx-[12vw] justify-between font-semibold font-serif"><li>  PRODUCT VARIANT</li>
         
             </ul>
              <ul  className=" flex justify-between font-serif font-semibold "><li>   QUANTITY</li>
         
             </ul>
            </ul>
         
         </div>

        
          {cart.map((item, index) => (

            







            <div
              key={index}
              className="flex-col justify-between items-center border-t border-b py-4 sm:flex-row sm:justify-between"
            >


              
              
              <div className="flex items-center sm:flex-row sm: ">
                {/* Displaying Image */}
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4 xl:object-center xl:w-[50wh] xl:h-[20vh]" />
                <div className="xl:flex xl:justify-evenly xl:gap-[5vw] lg:flex lg:justify-evenly lg:gap-[3vw] ">
                 <div>
                 <h2 className="text-lg font-semibold hover:text-green-500">{item.name}</h2>
                
                 </div>
                 <div>   <p>{item.variant} - {item.size}</p>
                 <p>₹{item.price} x {item.quantity}</p></div>



                
                 <div className="flex items-center  justify-between mt-4 overflow-hidden rounded-md ring-1 ring-black md:w-[18vw] xl:ml-10 ">
                <button
                 onClick={() => updateCartItemQuantity(index, item.quantity > 1 ? item.quantity - 1 : 1)}

                  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white"
                >
                  -
                </button>
                <span className="flex justify-center content-center items-center">{item.quantity}</span>
                <button
                  onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10  sm:w-10 2xl:w-20 font-bold text-3xl items-center text-white"
                >
                  +
                </button>
              </div>
               
              <div className="hidden xl:flex xl:justify-center">
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>
              </div>





                </div>
              </div>




            
              {/* Buttons for quantity adjustment */}
              

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 xl:hidden"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-8 ">
            <div className="text-xl font-bold bg-gray-200  flex justify-between sm:justify-end sm:gap-[4vw] h-[10vh] content-center items-center self-center px-[2vw]  "> 
              <div> Total: </div>
              <div> ₹{totalPrice}</div>
            </div>
           
           
          </div>
         <div className=" flex-col content-center items-center self-center justify-center   xl:pl-[60vw]  md:pl-[30vw]">
        <Link to ="/checkout"> <button className="bg-green-500 text-white px-4 hover:bg-amber-400  py-2 rounded-md mt-4 w-full">
              Checkout
            </button>
        </Link>
         <Link to= "/products"><button className="bg-green-500 text-white px-4 py-2   hover:bg-amber-400 rounded-md mt-4 w-full">
              Continue Shopping
            </button>
         </Link>
         </div>
        </>
      )}
      
    </div>
    
  );
};

export default CartPage;


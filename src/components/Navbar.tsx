"use client";

import { ShoppingCart, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton"
import AuthContextProvider from "@/contexts/AuthContext";
const Navbar = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center px-6 font-semibold">
    
      <div className="flex items-center space-x-2">
        <Link  href={"/"}>
        <Image
          src="/assets/logo/logo.png" 
          alt="Peros Logo"
          width={190}
          height={150}
        
        />
        
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/about" className="text-black hover:bg-green-30 transition">
          About Us
        </Link>
        <Link href="/Home" className="text-black hover:text-[#D9F99D] transition">
          Products
        </Link>
        <Link href="/contact-us" className="text-black hover:text-[#D9F99D] transition">
          Contact Us
        </Link>
        <Link href="/buy" className="bg-[#D9F99D] text-black px-4 py-2 rounded-md hover:bg-green-300 transition">
          Buy
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/login">
       <button className="bg-green-600 px-4 py-1 rounded-full text-white hover:bg-green-300 font-bold">
        Login
       </button>
        </Link>
        <Link href={`/account`}>
          <button
            title="My Account"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            <UserCircle2 size={14} />
          </button>
        </Link>
        <Link href={`/cart`}>
          <button
           
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            <ShoppingCart size={14} />
          </button>
        </Link>
{/*         
        <button className="p-2 rounded-full hover:bg-green-300 hover:text-[#D9F99D] transition">
          <Image
            src="/assets/icons/profile-user.png" 
            alt="User Icon"
            width={24}
            height={24}
          />
        </button> */}
        {/* <button className="p-2 rounded-full hover:bg-gray-200 hover:text-[#D9F99D] transition">
          <Image
                src="/assets/icons/cart.png"
            alt="Cart Icon"
            width={24}
            height={24}
          />
        </button> */}
        <AuthContextProvider>


        <LogoutButton />
        </AuthContextProvider>
      </div>

   
      <div className="md:hidden">
        <button id="menu-button" className="p-2 rounded-full hover:bg-gray-200 hover:text-[#D9F99D] transition">
          <Image
            src="/assets/" 
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import { useState } from "react";
import { ShoppingCart, UserCircle2, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/contexts/AuthContext";
import HeaderClientButtons from "@/components/HeaderClientButtons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact-us" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center px-6 font-semibold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/assets/logo/logo.png"
            alt="Peros Logo"
            width={190}
            height={150}
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {menuList.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-black hover:text-[#D9F99D] transition"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/products"
          className="bg-[#D9F99D] text-black px-4 py-2 rounded-md hover:bg-green-300 transition"
        >
          Buy
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <AuthContextProvider>
          <HeaderClientButtons />
        </AuthContextProvider>
        <Link href="/account">
          <button
            title="My Account"
            className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            <UserCircle2 size={14} />
          </button>
        </Link>
        {/* <Link href="/cart">
          <button className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50">
            <ShoppingCart size={14} />
          </button>
        </Link> */}
        <AuthContextProvider>
          <LogoutButton />
        </AuthContextProvider>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full hover:bg-gray-200 hover:text-[#D9F99D] transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {menuList.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black hover:text-[#D9F99D] transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#D9F99D] text-black px-4 py-2 rounded-md hover:bg-green-300 transition"
            >
              Buy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

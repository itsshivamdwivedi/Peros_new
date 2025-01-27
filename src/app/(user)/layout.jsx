"use client";

import AuthContextProvider, { useAuth } from "@/contexts/AuthContext";
import  { CartProvider } from "@/contexts/CartContext"
import { CircularProgress} from "@nextui-org/react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <main>
     <Navbar/>
      <AuthContextProvider>
        <CartProvider>

        <UserChecking>
          <section className="h-screen">{children}</section>
        </UserChecking>
        </CartProvider>
      </AuthContextProvider>
    
    </main>
  );
}

function UserChecking({ children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="h-screen w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="text-sm text-gray-600">You are not logged In!</h1>
        <Link href={"/login"}>
          <button className="text-white bg-blue-500 px-4 py-2 text-sm rounded-xl">
            Login
          </button>
        </Link>
      </div>
    );
  }
  return <>{children}</>;
}
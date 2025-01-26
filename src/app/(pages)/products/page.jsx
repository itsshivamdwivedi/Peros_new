"use client"

import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Products from "./Products";


function App() {
  return (
 
      <div >
          <Navbar/>
    <CartProvider>
     
      <Products />
     
      
    </CartProvider>
 </div>
      


    
 
  );
}

export default App;




import AuthContextProvider from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@nextui-org/react";


export default function Layout ({children}){
    return(
        <main>
            <AuthContextProvider>
                <CartProvider>
                    
            <Navbar/>

            {children}
                </CartProvider>
            </AuthContextProvider>
        </main>
    )
}
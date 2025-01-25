import AuthContextProvider from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/Navbar";


export default function Layout ({children}){
    return(
        <main>
            <AuthContextProvider>
                <CartProvider>
                    
          

            {children}
                </CartProvider>
            </AuthContextProvider>
        </main>
    )
}
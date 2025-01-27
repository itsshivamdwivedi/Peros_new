import AuthContextProvider from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";



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
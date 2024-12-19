import AuthContextProvider from "@/contexts/AuthContext";
import { Navbar } from "@nextui-org/react";


export default function Layout ({children}){
    return(
        <main>
            <AuthContextProvider>
            <Navbar/>

            {children}
            </AuthContextProvider>
        </main>
    )
}
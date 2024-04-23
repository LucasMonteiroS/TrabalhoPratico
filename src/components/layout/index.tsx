import { Outlet } from "react-router-dom";
import Header from "../header";
import { Footer } from "../footer";
import { CartProvider } from "../context/CartContext";

export function Layout(){
    return(
        <>
        <CartProvider>
            <Header/>
            <Outlet/>
            <Footer/>
            </CartProvider>
        </>
    )
}
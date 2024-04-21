import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import './style.css'
import { useEffect, useState } from 'react';

interface UserLogged {
    uid: string;
    email: string;
}
export function Header(){
    const [userData, setUserData] = useState<UserLogged | null>(null)

    useEffect( ()=>{
        async function getUser(){
            const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    const parsedUserData: UserLogged = JSON.parse(storedUserData);
                    setUserData(parsedUserData);
                }
                alert(storedUserData);
        }
        getUser();
    },[])
    return(
        <div className='header'>
            <Link to= "/" className='links'>LOGO</Link>
            <div>
                <label>{userData && <p>Olá, {userData.email}</p>}</label>
                <Link to= "/carrinho" className='links'><BsCart4 /></Link>
                <Link to= "/produto" className='links'>Produtos</Link>
                <Link to= "/favorito" className='links'>Favoritos</Link>           
                <Link to= "/contato" className='links'>Ir para Contatos</Link>
                <Link to= "/sobre" className='links'>Ir para Sobre</Link>
                <Link to= "/login" className='links'>Login</Link>
            </div>
        </div>
    )
}
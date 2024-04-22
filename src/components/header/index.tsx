import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import './style.css'
import { FaUserEdit } from "react-icons/fa";


export function Header() {
    const storedUserData = localStorage.getItem('@userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    const userEmail = parsedUserData ? parsedUserData.email : '';
    return(
        <div className='header'>
            <Link to= "/" className='links'>LOGO</Link>
            <div>
                <label >Olá, {userEmail}</label>
                <Link to= "/carrinho" className='links'><BsCart4 /></Link>
                <Link to= "/produto" className='links'>Produtos</Link>
                <Link to= "/favorito" className='links'>Favoritos</Link>           
                <Link to= "/contato" className='links'>Ir para Contatos</Link>
                <Link to= "/sobre" className='links'>Ir para Sobre</Link>
                <Link to= "/login" className='links'>Login</Link>
                <Link to= "/editUser" className='links'><FaUserEdit />
</Link>
            </div>
        </div>
    )
}
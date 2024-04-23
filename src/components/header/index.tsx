import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import './style.css'
import { FaUserEdit } from "react-icons/fa";
import CartModal from '../CartModal/CartModal';
import { useState } from 'react';
import { CartProvider } from '../context/CartContext';


export function Header() {
    const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
    const storedUserData = localStorage.getItem('@userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    const userEmail = parsedUserData ? parsedUserData.email : '';
    return(
        <div className='header'>
            <Link to= "/" className='links'>LOGO</Link>
            <div>
                <label >Olá, {userEmail}</label>
                <CartProvider>
                <Link to="" className='links' onClick={handleModalOpen}><BsCart4 /></Link>
                <Link to= "/produto" className='links'>Produtos</Link>
                <Link to= "/favorito" className='links'>Favoritos</Link>           
                <Link to= "/contato" className='links'>Ir para Contatos</Link>
                <Link to= "/sobre" className='links'>Ir para Sobre</Link>
                <Link to= "/login" className='links'>Login</Link>
                <Link to= "/editUser" className='links'><FaUserEdit /></Link>
                <CartModal open={modalVisible} closeModal={handleModalClose} />
                </CartProvider>
            </div>
        </div>
    )
}
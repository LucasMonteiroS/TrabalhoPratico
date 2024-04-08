import { Link } from 'react-router-dom'
import './style.css'
export function Header(){
    return(
        <div className='header'>
            <Link to= "/" className='links'>LOGO</Link>
            <div>
                <Link to= "/produto" className='links'>Produtos</Link>
                <Link to= "/favorito" className='links'>Favoritos</Link>           
                <Link to= "/contato" className='links'>Ir para Contatos</Link>
                <Link to= "/sobre" className='links'>Ir para Sobre</Link>
                <Link to= "/login" className='links'>Login</Link>
            </div>
        </div>
    )
}
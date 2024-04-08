import { Link } from 'react-router-dom'
export function NotFound(){
    return(
        <div>
            <h1>Página  não encontrada</h1>
            <p>O que você está procurando não foi encontrado.</p>
            <Link to= "/">Voltar para a home</Link>
        </div>
    )
}
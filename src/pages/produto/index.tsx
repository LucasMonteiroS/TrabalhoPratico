import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/card';
import { ContainerProds } from '../../components/styled-components/Card/style';

interface CardProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

export function Produto(){
    const { id } = useParams()
    const  [card, setCard] = useState<CardProps[]>([])

    useEffect( ()=>{
        async function getProduct(){
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setCard(data);
        }
        getProduct();
    },[])
    return(
        <ContainerProds>
            {card.map((item, index) =>(
                <div key={index}>
                    <Card id={item.id} imageUrl={item.image} title={item.title} text={item.description} buttonText={'Ver Detalhes'} buttonUrl={'/detalhe/' + item.id} {...card}/>
                </div>
            ))}
            <h1>Descrição do Produto{id}</h1>
        </ContainerProds>
    )
}
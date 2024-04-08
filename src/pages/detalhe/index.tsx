import { useEffect, useState } from 'react';
import Card from '../../components/Card/card';
import { ContainerProds } from '../../components/styled-components/Card/style';
import { useParams } from 'react-router-dom';

interface CardProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

export function Detalhe() {
    const [card, setCard] = useState<CardProps[]>([]);
    const { id } = useParams<{ id: string }>(); // Obtém o ID da URL

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                console.log(data); // Verifica os dados recebidos
                const filteredData = data.filter((item: { id: string }) => item.id.toString() === id);
                console.log(filteredData); // Verifica os dados filtrados
                setCard(filteredData);
            } catch (error) {
                console.error('Error fetching favorite products:', error);
            }
        }
        getProduct();
    }, [id]); // Certifique-se de incluir id como uma dependência para que useEffect() seja reexecutada quando o ID mudar

    return (
        <ContainerProds>
            {card.map((item, index) => (
                <div key={index}>
                    <Card id={item.id} imageUrl={item.image} title={item.title} text={item.description} buttonText={'Ver Detalhes'} buttonUrl={'/detalhe/' + item.id} />
                </div>
            ))}
        </ContainerProds>
    );
}

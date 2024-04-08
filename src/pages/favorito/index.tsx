import { useEffect, useState } from 'react';
import Card from '../../components/Card/card';
import { db } from "../../services/firebaseConnection";
import {
    collection,
    getDocs
  } from "firebase/firestore";
import { ContainerProds } from '../../components/styled-components/Card/style';

  interface CardData {
    id: number;
    title: string;
    description: string;
    image: string;
}

export function Favorito() {
    const [card, setCard] = useState<CardData[]>([])

    useEffect(() => {
        async function getProduct() {
            try {
                const productsRef = collection(db, 'bookmarks');
                const querySnapshot = await getDocs(productsRef);
                const favoriteCards = querySnapshot.docs.map(doc => doc.data() as CardData);
                setCard(favoriteCards);
                console.log(favoriteCards);
            } catch (error) {
                console.error('Error fetching favorite products:', error);
            }
        }
        getProduct();
    }, [db])

    return (
        <ContainerProds>
            {card.map((item, index) => (
                <div key={index}>
                    <Card id={item.id} imageUrl={item.image} title={item.title} text={item.description} buttonText={'Ver Detalhes'} buttonUrl={'/detalhe/' + item.id} {...card} />
                </div>
            ))}
        </ContainerProds>
    )
}

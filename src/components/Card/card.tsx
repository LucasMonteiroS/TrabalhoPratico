import { addDoc, collection } from "firebase/firestore";
import {
  ProductButton,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductText,
  ProductButtons,
  ProductFavButton,
} from "../styled-components/Card/style";

import { db } from "../../services/firebaseConnection";

interface CardProps {
  imageUrl: string;
  id: number;
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  id,
  title,
  text,
  buttonText,
  buttonUrl,
}) => {
  function handleBookmark() {
    alert("Item Favoritado!");
    addDoc(collection(db, "bookmarks"), {
      id: id,
      title: title,
      description: text,
      image: imageUrl,
      bookmarkedAt: new Date(),
    })
      .then(() => console.log("Adicionado a lista de favoritos!"))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <ProductCard>
        <ProductImage src={imageUrl} alt="Imagem do produto" />
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductText>{text}</ProductText>
          <ProductButtons>
            <ProductButton href={buttonUrl}>{buttonText}</ProductButton>
            <ProductFavButton type="button" onClick={handleBookmark}>
              Favoritar
            </ProductFavButton>
          </ProductButtons>
        </ProductInfo>
      </ProductCard>
    </>
  );
};

export default Card;

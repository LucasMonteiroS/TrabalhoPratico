import styled from 'styled-components';

const ContainerProds = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 295px;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h5`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ProductButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductButton = styled.a`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0062cc;
  }
`;

const ProductFavButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #FFFF00;
  color: #fff;

  &:hover {
    background-color: #FFD700;
  }
`;


export {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductText,
    ProductButtons,
    ProductFavButton,
    ContainerProds
  };

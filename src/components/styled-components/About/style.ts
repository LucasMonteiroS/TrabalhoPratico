import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4F4F4F;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  max-width: 500px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

export { Text, TextContainer, Container, Title };
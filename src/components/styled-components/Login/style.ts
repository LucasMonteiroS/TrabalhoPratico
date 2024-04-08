import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4F4F4F;
  height: 90vh;
`;

const FormContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #0077FF;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #0077FF;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  color: #333333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #0077FF;
  text-decoration: none;
  margin-right: 10px;
`;

const LoginButton = styled.button`
  background-color: #0077FF;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
`;

export { Container, LoginButton, ForgotPassword, ButtonContainer, FormContainer, Title, Label, InputContainer, InputField };
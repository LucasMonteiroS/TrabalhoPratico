import React, { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginButton,
  ForgotPassword,
  ButtonContainer,
  FormContainer,
  Title,
  Label,
  InputContainer,
  InputField
} from "../../components/styled-components/Login/style";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logado com sucesso!");
        localStorage.setItem('userData', JSON.stringify(user)); 
        navigate("/produto", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        console.log("Erro ao fazer login!");
      });
  }

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <InputContainer>
          <Label>Usuário</Label>
          <InputField
            type="email"
            placeholder="joão@silva.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Senha</Label>
          <InputField
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <LoginButton type="submit" onClick={handleSubmit}>
            Entrar
          </LoginButton>
        </ButtonContainer>
        <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
      </FormContainer>
    </Container>
  );
};

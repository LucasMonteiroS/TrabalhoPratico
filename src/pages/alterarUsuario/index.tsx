import { FormEvent, useState } from "react";
import { auth, db } from "../../services/firebaseConnection";
import {
    Container,
    LoginButton,
    ButtonContainer,
    FormContainer,
    Title,
    Label,
    InputContainer,
    InputField
  } from "../../components/styled-components/Login/style";
import { UserProvider, useUser } from "../../components/context/UserContext";
import { addDoc, collection } from "firebase/firestore";

export function AlterarUsuario() {
  const { currentUser} = useUser();
  const [newEmail, setNewEmail] = useState(currentUser?.email || '');
  const [newNome, setNewNome] = useState(currentUser?.email || '');
  const [newSenha, setNewSenha] = useState(currentUser?.email || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const currentUserAuth = auth.currentUser;
      if (!currentUserAuth) {
        throw new Error("Usuário não autenticado");
      }
      alert(newEmail)
      await addDoc(collection(db, "newUsers"), {
        nome: newNome,
        email: newEmail,
        senha: newSenha,
        createdAt: new Date(),
        bookmarkedAt: new Date(),
      });
      alert("Usuário Alterado!");
    } catch (err) {
      console.error("Erro ao atualizar email:", err);
      setError((err as Error).message);
    }
  };

  return (
    <Container>
      <Title>Editar Usuário</Title>
      <UserProvider>
      <FormContainer>
        <InputContainer>
          <Label>Novo Nome:</Label>
          <InputField
            type="text"
            value={newNome}
            onChange={(e) => setNewNome(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Novo Email:</Label>
          <InputField
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Nova Senha:</Label>
          <InputField
            type="password"
            value={newSenha}
            onChange={(e) => setNewSenha(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <LoginButton type="submit" onClick={handleSubmit}>Salvar</LoginButton>
        </ButtonContainer>
      </FormContainer>
      </UserProvider>
      {error && <p>{error}</p>}
    </Container>
  );
}

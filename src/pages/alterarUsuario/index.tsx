import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import firebase from "firebase/compat/app";
import { useUser } from "../../components/context/UserContext";
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

export function AlterarUsuario() {
  const { user, updateUser } = useUser();
  const [newEmail, setNewEmail] = useState(user?.email || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser as firebase.User;
      await currentUser.updateEmail(newEmail);
      updateUser({ ...user, email: newEmail });
      console.log("Email atualizado:", newEmail);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    }
  };

  return (
    <Container>
      <Title>Editar Usuário</Title>
      <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Label>
          Novo Email:
        </Label>
        <InputField
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          </InputContainer>
          <ButtonContainer>
        <LoginButton type="submit">Salvar</LoginButton>
        </ButtonContainer>
      </FormContainer>
      {error && <p>{error}</p>}
    </Container>
  );
}

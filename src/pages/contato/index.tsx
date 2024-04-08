import { Link } from 'react-router-dom'

import { ButtonContainer, SubmitButton,Container, FormContainer, Title, TextareaContainer, TextareaLabel, TextareaField, InputContainer, InputField, Label } from '../../components/styled-components/Contact/style'
import { useState } from 'react';
export function Contato(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return(
        <Container>
      <FormContainer>
        <Title>Contate-Nos</Title>
        <InputContainer>
          <Label>Name</Label>
          <InputField
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <InputField
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <TextareaContainer>
          <TextareaLabel>Message</TextareaLabel>
          <TextareaField
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </TextareaContainer>
        <ButtonContainer>
          <SubmitButton type="submit">ENVIAR</SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </Container>
    )
}
import { Link } from 'react-router-dom'

import { Text, TextContainer, Container, Title } from '../../components/styled-components/About/style'
export function Sobre(){
    return(
        <Container>
            <Title>Sobre a Nossa Empresa</Title>
            <TextContainer>
                <Text>
                    A melhor forma para se organizar, crescer e se desenvolver é planejar e
                    agir estrategicamente.
                </Text>
                <Text>
                    Onde você pretende estar daqui a 5, 10, 20 anos? Qual legado você quer deixar
                    na sua empresa? O que significa sucesso na sua área?
                </Text>
                <Text>
                    Mais detalhes em construção.
                </Text>
            </TextContainer>
        </Container>
    )
}
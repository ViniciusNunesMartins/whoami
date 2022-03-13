import { FC } from 'react';
import { Container, Title, ContainerItens } from './styles';
import { Linux, Docker, Aws, Python, JavaScript, Django, React, Postgresql } from './icons';


interface IProps { }


const Ability: FC<IProps> = () => {
    return (
        <Container>
            <Title>Ability</Title>
            <ContainerItens>
                <Linux />
                <Docker />
                <Aws />
                <Python />
                <JavaScript />
                <Django />
                <React />
                <Postgresql />
            </ContainerItens>
        </Container>
    );
}


export default Ability;
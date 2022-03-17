import { FC } from 'react';
import { Container, Title, ContainerItens } from './styles';
import { Linux, Docker, Aws, Python, JavaScript, Django, React, Postgresql, Git } from './icons';


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
                <Git />
            </ContainerItens>
        </Container>
    );
}
 

export default Ability;
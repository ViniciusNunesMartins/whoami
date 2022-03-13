import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    height: 100%;
    width: 100%;

    border-radius: 15px  15px 5px 5px;
`;


export const Title = styled.h1`
    margin: auto;
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const shake = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(20deg);
    }
    75% {
        transform: rotate(-20deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const ContainerItens = styled(Container)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 2.5rem;
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.colors.primary};
            animation: ${shake} 1s infinite;
        }
    }
`;



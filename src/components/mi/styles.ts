import styled from 'styled-components';


export const MiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.secondary}A2;
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  border-radius: 25px;
  backdrop-filter: blur(5px);
`;

export const MiPhoto = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const MiName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

export const MiTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

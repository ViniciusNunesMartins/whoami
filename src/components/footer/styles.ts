import styled, { keyframes } from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 2rem;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const showText = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Links = styled.ul`
  color: ${props => props.theme.colors.background};
  list-style: none;
  li {
    display: flex;
    align-items: center;
    span {
      display: none;
    }
    &:hover {
      span {
        animation: ${showText} 0.5s ease-in-out;
        margin-left: 5px;
        display: inline;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.background};
    &:hover {}
  }
`;
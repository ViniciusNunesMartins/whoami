import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 2rem;
`;
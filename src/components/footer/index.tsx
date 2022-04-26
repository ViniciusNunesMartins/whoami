import { FC } from 'react';
import { FooterContainer, Links, Block } from './styles';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer: FC = () => {
  return (
    <FooterContainer>
      <Block>
        <Links>
          <li>
            <a href="https://github.com/viniciusnunesmartins">
              <FaGithub size={24} />
            </a>
            <span>My GitHub</span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/viniciusnunesmartins/">
              <FaLinkedin size={24} />
            </a>
            <span>My LinkedIn</span>
          </li>
          <li>
            <a href="https://github.com/viniciusnunesmartins/whoami">
              <FaCode size={24} />
            </a>
            <span>Whoami Repository</span>
          </li>
        </Links>
      </Block>
    </FooterContainer>
  );
};


export default Footer;
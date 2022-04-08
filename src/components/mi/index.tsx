import { FC } from 'react';
import { MiContainer, MiPhoto, MiName, MiTitle } from './styles';


const photo = require('../../assets/images/mi.jpg');


const Mi: FC = () => {
  return (
    <MiContainer>
      <MiPhoto src={photo} />
      <MiName>Vinicius Nunes Martins</MiName>
      <MiTitle>Full-Stack Developer</MiTitle>
    </MiContainer>
  );
}


export default Mi;
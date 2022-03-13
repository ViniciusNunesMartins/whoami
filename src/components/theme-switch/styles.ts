import styled from 'styled-components';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const Sun = styled(BsFillSunFill)`
    padding: 5px;
    font-size: 1.5rem;
`;

export const Moon = styled(BsMoonFill)`
    padding: 5px;
    font-size: 1.5rem;
`;
   
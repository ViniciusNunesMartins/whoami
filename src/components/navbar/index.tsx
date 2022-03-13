import { FC } from 'react';
import { Container } from './styles';
import ThemeSwitch from '../theme-switch';


interface IProps {
    toggleTheme(): void;
}

const Navbar: FC<IProps> = ({ toggleTheme }) => {
    return (
        <Container>
            <h1>@MinicioVartins</h1>
            <ThemeSwitch toggleTheme={toggleTheme} />
        </Container>
    );
}

export default Navbar;
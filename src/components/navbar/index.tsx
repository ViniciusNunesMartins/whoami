import { FC } from 'react';
import { Container } from './styles';
import ThemeSwitch from '../theme-switch';


interface IProps {
    toggleTheme(): void;
}

const Navbar: FC<IProps> = ({ toggleTheme }) => {
    return (
        <Container>
            <h2>@MinicioVartins</h2>
            <ThemeSwitch toggleTheme={toggleTheme} />
        </Container>
    );
}

export default Navbar;
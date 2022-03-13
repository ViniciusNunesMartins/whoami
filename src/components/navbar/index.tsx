import { FC, useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';


interface IProps {
    toggleTheme(): void;
}

const Navbar: FC<IProps> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);


    return (
        <Container>
            <h1>@MinicioVartins</h1>
            <Switch
                onChange={toggleTheme}
                checked={ title === 'dark' }
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.primary}
            />
        </Container>
    );
}

export default Navbar;
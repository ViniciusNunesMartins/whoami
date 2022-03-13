import { FC, useContext } from 'react';
import { Container, Sun, Moon } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';



interface IProps {
    toggleTheme(): void;
}

const ThemeSwitch: FC<IProps> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Sun />
            <Switch
                onChange={toggleTheme}
                checked={ title === 'dark' }
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={45}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.primary}
            />
            <Moon />
        </Container>
    );
}

export default ThemeSwitch;
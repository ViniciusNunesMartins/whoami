import { FC, useContext } from 'react';
import { Container, Sun, Moon } from './styles';
import { ThemeContext } from 'styled-components';




interface IProps {
    toggleTheme(): void;
}

const ThemeSwitch: FC<IProps> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);

    return (
        <Container>
            {
                title === 'dark' ?
                (<Sun onClick={toggleTheme} />) :
                (<Moon onClick={toggleTheme} />)
            }
        </Container>
    );
}

export default ThemeSwitch;
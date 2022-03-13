import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePErsistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlovalStyle from './styles/global';

import Navbar from './components/navbar';
import Ability from './components/ability';


export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <Ability />
      </main>
      <GlovalStyle />
    </ThemeProvider>
  );
}

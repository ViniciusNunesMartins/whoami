import Navbar from './components/navbar';
import usePersistedState from './utils/usePErsistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlovalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';


export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar toggleTheme={toggleTheme} />
      </div>
      <GlovalStyle />
    </ThemeProvider>
  );
}

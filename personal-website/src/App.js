import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';


const theme = createTheme({
  palette: {
    background: {
      default: "#616161",
    },
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Header />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

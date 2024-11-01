import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import AnimatedCursor from "react-animated-cursor";


const theme = createTheme({
  palette: {
    background: {
      default: "#616161",
      bars: "#686868"
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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedCursor
        innerSize={20}
        outerSize={8}
        color={'217, 186, 165'}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
        style={{ zIndex: 9999 }}
      />
      <Home />
      <Header />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

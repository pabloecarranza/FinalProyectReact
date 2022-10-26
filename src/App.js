import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import {CartProvider} from './contexts/CartContext/CartContext.js';
import customTheme from './assets/theme'
import Footer from './components/Footer/Footer';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Outlet} from 'react-router-dom'


function App() {
  return (
    
      <div className='App'>
        <ThemeProvider theme={customTheme}>
          <CssBaseline/>
          <CartProvider>
            <NavBar/>
            <Outlet/>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </div>

  );
}

export default App;

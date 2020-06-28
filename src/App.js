import React from 'react';
import logo from './logo.svg';
import './tailwind.generated.css';
import { BrowserRouter } from 'react-router-dom';
import { mediaQuery } from './utils/mediaquery';
import { NavbarMovile, NavbarDesktop } from './components/navbar/navbar';
import './shared/scss/shared.scss';
function App() {
  
  const Navbar = mediaQuery.tabletQuery ? NavbarMovile : NavbarDesktop;
  
  return ( 
    <BrowserRouter>
      <div className="" >
        <Navbar />
      </div>
    </BrowserRouter>
  
  );
}

export default App;

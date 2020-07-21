import React, { useState } from 'react'
import theme from './ui/Theme'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types';

import OverlayMenu from './Tango/OverlayMenu';
import Hamburger from './Tango/Hamburger';
import Header from './Tango/Header'
import Footer from './ui/footer/Footer'
import './layout.css'



const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <ThemeProvider theme={theme}>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

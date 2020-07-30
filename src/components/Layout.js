import React from 'react'
import theme from './ui/Theme'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types';
import Header from './ui/header/HeaderMaterialStyle'
//import Header from './Tango/Header'
import Footer from './ui/footer/Footer'
import './layout.css'



const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
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

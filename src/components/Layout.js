import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/Theme'
import Footer from './ui/footer/Footer'
import './layout.css'
//import HeaderMaterial from '../components/ui/header/HeaderMaterial'
import Header from '../components/Tango/Header'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <HeaderMaterial /> */}
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

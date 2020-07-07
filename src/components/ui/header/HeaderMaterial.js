import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Header from './Header'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysterises: true,
    treshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const HeaderMaterial = (propas) => {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar>
          <h3>Headless WP</h3>
          <Header />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default HeaderMaterial

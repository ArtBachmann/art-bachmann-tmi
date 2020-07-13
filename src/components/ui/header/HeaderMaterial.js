import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Navbar from './Navbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

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

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}))

const HeaderMaterial = (props) => {
  const classes = useStyles()
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Typography variant='h2'
              style={{ margin: '0.6em', color: '#607D8B' }}
            >
              Headless Wordpress
            </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default HeaderMaterial

import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//import revolutionBackground from '../assets/images/3d-background-light.jpg'
import UC from '../assets/images/under-construction.png'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: '#f5f5f5',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em'
  },
}))

const UnderConstructor = () => {
  const classes = useStyles()
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Grid container
      style={{ height: '55em', marginTop: '-2em' }}
      alignItems='center'
      justify='center'
      className={classes.background}>

      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container
            direction='column' >
            <Grid item>
              <img
                alt='qr logo'
                src={UC}
                style={{
                  width:
                    matchesXS ? '14em' :
                      matchesSM ? '18em' :
                        matchesMD ? '24em' : '36em'
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UnderConstructor

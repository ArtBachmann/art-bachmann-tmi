import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//import revolutionBackground from '../../../assets/images/3d-background-light.jpg'
import QR from '../../assets/images/artbachmann.eu.png'
import QRHome from '../../../assets/images/art-bachmann-tmi.png'
import HeadlessWPFrontpage from '../../assets/images/headless-wp-frontpage-screenshot.png'
import CafeteriaGatsbyFrontpage from '../../../assets/images/cafeteria-gatsby-frontpage-screenshot.png'


const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 500,
    height: 45,
    width: 200,
    '&:hover': {
      backgroundColor: theme.palette.common.grey1,
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '8em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '6em',
      paddingBottom: '6em',
      paddingLeft: 0,
      paddingRight: 0,
      margin: '1rem',
      borderRadius: 0
    }
  }
}))

const Revolution = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Grid container
      style={{ height: '55em', marginTop: '2em' }}
      alignItems='center'
      justify='center'>
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container
            direction='column'
          >
            <Grid
              item
              container
              justify='center'
              alignItems='center'
              style={{
                marginTop: matchesXS ? '2em' :
                  matchesSM ? '4em' : undefined
              }}
              lg>


              <Grid item>
                <img
                  alt='qr logo'
                  src={QRHome}
                  className={classes.image}
                />
              </Grid>

              <Grid
                item
                className={classes.qr}>
                <img
                  alt='headless wordpress front page'
                  src={HeadlessWPFrontpage}
                  className={classes.image} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionBackground} />
    </Grid>
  )
}

export default Revolution

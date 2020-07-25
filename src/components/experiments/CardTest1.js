import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../../assets/images/3d-background-light.jpg'
import QR from '../../assets/images/artbachmann.eu.png'
import QRHome from '../../assets/images/art-bachmann-tmi.png'
import HeadlessWPFrontpage from '../../assets/images/headless-wp-frontpage-screenshot.png'
import CafeteriaGatsbyFrontpage from '../../assets/images/cafeteria-gatsby-frontpage-screenshot.png'


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
    padding: '4em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2em',
      paddingBottom: '2em',
      paddingLeft: 0,
      paddingRight: 0,
      margin: '1rem',
      borderRadius: 0
    }
  }, qr: {
    marginLeft: '5em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1em'
    }
  },

  heroTextContainer: {
    [theme.breakpoints.down('xl')]: {
      width: '40vw',
      paddingTop: '4em',
    },

    [theme.breakpoints.down('lg')]: {
      width: '40vw',
      paddingTop: '4em',
    },

    [theme.breakpoints.down('md')]: {
      width: '80vw',
      paddingTop: '4em'
    },

    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      paddingTop: '4em',
    },
  },
}))

const Revolution = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container
      style={{ height: '55em', marginTop: '2em' }}
      alignItems='center'
      justify='center'>
      <Card
        className={classes.revolutionCard}>
        <CardContent >
          <Grid container
            direction='column'
          >
            <Grid
              item
              container
              justify='center'
              alignItems='center'
              style={{ width: '20em' }}
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

              <Grid item container justify='center' sm>
                <Link to={'/estimate/'}>
                  <Grid item>
                    <img
                      alt='headless wordpress front page'
                      src={CafeteriaGatsbyFrontpage}
                      style={{ width: '14em' }}
                      className={classes.image}
                      className={classes.qr} />
                  </Grid>
                </Link>
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

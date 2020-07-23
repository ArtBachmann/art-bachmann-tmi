import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import QR from '../../../assets/images/artbachmann.eu.png'
import QRHome from '../../../assets/images/art-bachmann-tmi.png'
import HeadlessWPFrontpage from '../../../assets/images/headless-wp-frontpage-screenshot.png'
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
  rowContainer: {
    paddingLeft: '4em',
    paddingRight: '4em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
    }
  },
  background: {
    backgroundColor: '#FFFFFF',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em'
  },

  qr: {
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
  image: {
    width: '14em',
    marginLeft: '3em',
    marginBottom: '2em',

    [theme.breakpoints.down('xl')]: {
      width: '14em',
      marginLeft: '3em',
      marginBottom: '2em',
    },

    [theme.breakpoints.down('lg')]: {
      width: '12em',
      marginLeft: '3em',
      marginBottom: '2em',
    },

    [theme.breakpoints.down('md')]: {
      width: '10em',
      marginLeft: '2em',
      marginBottom: '2em',
    },

    [theme.breakpoints.down('sm')]: {
      width: '8em',
      marginLeft: '1em',
      marginBottom: '1em',
    },
  }
}))

const GraphQLBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (

    // Container holding the whole component
    <Grid
      container
      direction={matchesMD ? 'column' : 'row'}
      style={{ height: '42em' }}
      //justify='space-around'
      alignItems='center'
      className={classes.background}>


      {/* Container holding two QR blocks */}
      <Grid
        item
        container
        md
        justify='center'
        alignItems='center'>


        {/* Left side Logo block */}
        <Grid
          item
          className={classes.qr} >


          <Grid
            item
            container
            justify='center'
            alignItems='center'
            direction='row' >

            {/* First qr block */}
            <Grid item container md direction='column'>
              <img
                alt='qr logo'
                src={QRHome}
                className={classes.image}
              />

              <img
                alt='headless wordpress front page'
                src={HeadlessWPFrontpage}
                className={classes.image} />
            </Grid>

            {/* Second qr block */}
            <Grid item container md direction='column'>
              <img
                alt='qr logo'
                src={QR}
                className={classes.image} />

              <img
                alt='headless wordpress front page'
                src={CafeteriaGatsbyFrontpage}
                className={classes.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>




      {/* Right side text block */}

      <Grid item
        md
        style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>

        <Grid container>

          <Grid
            item
            container
            justify='center'
            alignItems='center'
            className={classes.heroTextContainer}>

            <Typography variant='body1'
              gutterBottom
              style={{ textIndent: '1em' }}>
              Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston. Sen sijaan, että odottaisit sivujen luomista pyynnöstä, rakenna sivut esille ja nosta ne globaaliin palvelinpilveen - valmiina toimittamaan heti käyttäjillesi missä he ovat.
              </Typography>
            <Typography variant='body1'
              gutterBottom
              style={{ textIndent: '1em' }}>
              Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa. Verkon tulevaisuus on mobiili, JavaScript ja sovellusliittymät. Jokainen verkkosivusto on verkkosovellus ja jokainen verkkosovellus on verkkosivusto. Gatsby.js on yleinen JavaScript-kehys, jota olet odottanut.
              </Typography>

          </Grid>
        </Grid>
      </Grid>

    </Grid>


  )
}

export default GraphQLBlock
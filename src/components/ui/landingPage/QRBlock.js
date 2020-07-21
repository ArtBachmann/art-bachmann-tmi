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
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0,3em'
    }
  },
}))

const GraphQLBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid container
      direction='row'
      style={{ height: '36em' }}
      justify='center'
      alignItems='center'
      className={classes.background}>

      <Grid item
        container
        style={{
          textAlign: matchesXS ? 'center' : 'inherit'
        }}
        direction={matchesXS ? 'column' : 'row'}
        spacing={matchesXS ? 8 : 'inherit'}>

        {/* Left side Logo block */}
        <Grid
          item
          md
          className={classes.qr}
        >
          <Grid item container
            justify='center'
            alignItems='center'
            direction='row'>

            <Grid sm item container direction='column'>
              <img
                alt='qr logo'
                src={QRHome}
                style={{
                  width: '14em',
                  maxWidth: matchesSM ? 100 : '14em',
                  marginLeft: matchesMD ? 1 : '3em',
                  marginBottom: matchesMD ? '5em' : 0
                }}
              />

              <img
                alt='headless wordpress front page'
                src={HeadlessWPFrontpage}
                style={{
                  width: '14em',
                  maxWidth: matchesSM ? 100 : '14em',
                  marginLeft: matchesMD ? 1 : '3em',
                  marginBottom: matchesMD ? '5em' : 0
                }}
              />
            </Grid>

            <Grid sm item container direction='column'>
              <img
                alt='qr logo'
                src={QR}
                style={{
                  width: '14em',
                  maxWidth: matchesSM ? 100 : '14em',
                  marginBottom: matchesMD ? '5em' : 0,
                  marginLeft: matchesMD ? 1 : '3em'
                }}
              />

              <img
                alt='headless wordpress front page'
                src={CafeteriaGatsbyFrontpage}
                style={{
                  width: '14em',
                  maxWidth: matchesSM ? 100 : '14em',
                  marginLeft: matchesMD ? 1 : '3em',
                  marginBottom: matchesMD ? '5em' : 0
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right side text block */}

        <Grid item
          md
          style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>

          <Grid container
            justify='flex-end'
            alignItems='center'
            direction='row'>
            <Grid sm item
              className={classes.heroTextContainer}
            >
              <Typography variant='body1'
                gutterBottom
                style={{ textIndent: '2em' }}>
                Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston. Sen sijaan, että odottaisit sivujen luomista pyynnöstä, rakenna sivut esille ja nosta ne globaaliin palvelinpilveen - valmiina toimittamaan heti käyttäjillesi missä he ovat.
            </Typography>
              <Typography variant='body1'
                gutterBottom
                style={{ textIndent: '2em' }}>
                Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa. Verkon tulevaisuus on mobiili, JavaScript ja sovellusliittymät. Jokainen verkkosivusto on verkkosovellus ja jokainen verkkosovellus on verkkosivusto. Gatsby.js on yleinen JavaScript-kehys, jota olet odottanut.
            </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


  )
}

export default GraphQLBlock
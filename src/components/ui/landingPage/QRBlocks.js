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
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
    },
  },
  rowContainer: {
    paddingLeft: '4em',
    paddingRight: '4em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    }
  },
  background: {
    backgroundColor: '#f5f5f5',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em'
  },

  qr: {
    marginLeft: '3em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1em'
    }
  },

  image: {


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
      width: '14em',
      marginLeft: '2em',
      marginBottom: '2em',
    },

    [theme.breakpoints.down('sm')]: {
      width: '10em',
      marginLeft: '1em',
      marginBottom: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '8em',
      marginLeft: '1em',
      marginBottom: '1em',
    },
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
      paddingTop: '2em'
    },

    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      paddingTop: '2em',
    },
  },

}))

const GraphQLBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (

    // Container holding the whole component
    <Grid
      container
      direction='column'
      justify='center'
      style={{
        height:
          matchesXS ? '68em' :
            matchesSM ? '64em' :
              undefined
      }}
      className={classes.mainContainer}
      className={classes.background}>


      {/* First QR Block */}
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        jutifyContent='space-evenly'
        className={classes.rowContainer}>

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

        {/* Text part of the  */}
        <Grid
          item
          container
          lg
          direction='column'
          alignContent='center'

          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginRight: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined,
            fontSize: matchesXS ? '0.9rem' :
              matchesSM ? '1rem' : '1.1rem'
          }}>

          <Grid item className={classes.heroTextContainer}>
            <Typography variant='h4' paragraph>
              # Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa.
              </Typography>
            <Typography variant='subtitle1'
              className={classes.subtitle}
              style={{
                fontSize: matchesXS ? '0.9rem' :
                  matchesSM ? '1rem' : '1.1rem'
              }}>
              Verkon tulevaisuus on mobiili ja sovellusliittymät. Jokainen verkkosivusto on verkkosovellus ja jokainen verkkosovellus on verkkosivusto.
            </Typography>
            <Typography variant='subtitle1'
              style={{
                fontSize: matchesXS ? '0.9rem' :
                  matchesSM ? '1rem' : '1.1rem'
              }}
            >
              Gatsby.js on yleinen JavaScript-kehys, jota olet odottanut.
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/* Second Qr Block */}
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        className={classes.rowContainer}
        jutifyContent='space-evenly'>

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

        {/* Text part of the  */}
        <Grid
          item
          container
          lg
          direction='column'
          alignContent='center'
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginRight: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined
          }}>

          <Grid item className={classes.heroTextContainer}>
            <Typography variant='h4' paragraph>
              # Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston.
              </Typography>
            <Typography variant='subtitle1' style={{
              fontSize: matchesXS ? '0.9rem' :
                matchesSM ? '1rem' : '1.1rem'
            }}>
              Kun käytät Headless-lähestymistapaa, sisällön näyttämiseen ei ole käyttöliittymää, ja järjestelmä koostuu vain tietokannasta ja API-puheluista.
            </Typography>
            <Typography variant='subtitle1' style={{
              fontSize: matchesXS ? '0.9rem' :
                matchesSM ? '1rem' : '1.1rem'
            }}>
              ! Lataa älypuhmilla qrkoodin avulla vieressä oleva sivusto ja katso miten ennennäkömäton nopeasti saa siellä liikkua vaikka on paljon kuvia. Lisäksi jos se sattuu oleman Sinun lemmikki ravintola saat laitta sen ikonin puhelimenn ja avata suoran sielta niin kui native appin..
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default GraphQLBlock
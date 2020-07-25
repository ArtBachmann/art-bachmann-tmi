import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box';
import revolutionBackground from '../../../assets/images/3d-background-light.jpg'
import QR from '../../../assets/images/artbachmann.eu.png'
import QRHome from '../../../assets/images/art-bachmann-tmi.png'
import HeadlessWPFrontpage from '../../../assets/images/headless-wp-frontpage-screenshot.png'
import CafeteriaGatsbyFrontpage from '../../../assets/images/cafeteria-gatsby-frontpage-screenshot.png'

const useStyles = makeStyles(theme => ({

  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
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

  revolutionCard: {
    position: 'flex',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '1.2em',
    [theme.breakpoints.down('sm')]: {
      position: 'flex',
      padding: '1em',
      margin: '1rem',
      borderRadius: 10
    }
  },

  transform: {
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 0.4rem rgba(121, 121, 121, 0.5)',
    borderRadius: '14px',
    '&:active': {
      transform: 'translate(0, 0.5rem)',
      boxShadow: '0 0.1rem rgba(255, 255, 255, 0.4)',
    }
  },

  heroTextContainer: {
    [theme.breakpoints.down('xl')]: {
      width: '40vw',
    },

    [theme.breakpoints.down('lg')]: {
      width: '40vw',
    },

    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },

    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
}))

const QRTest1 = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (

    // Container holding the whole component >>>>>>>>
    <Grid
      container
      direction='column'
      justify='space-evenly'
      style={{
        height:
          matchesXS ? '74em' :
            matchesSM ? '78em' :
              '72em'
      }}>

      {/* Headign */}

      <Grid item
        container
        justify='center'>
        <Typography
          style={{
            maxWidth: '55%',
            textAlign: 'center'
          }}
          variant={
            matchesSM ? 'h4' :
              matchesMD ? 'h2' : 'h2'}
          gutterBottom>
          Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston.
        </Typography>
      </Grid>

      {/* First Row QR Block */}

      <Grid
        item
        container
        justify='center'
        alignItems='center'
        direction='row'
        className={classes.rowContainer}>

        {/* Grid Item Container for Card 1 */}
        <Grid item md >
          <Grid
            item
            container
            justify='center'>
            <Card
              style={{ marginBottom: matchesMD ? '2em' : undefined }}
              className={classes.revolutionCard}>
              <CardContent >
                <Grid container>
                  <Grid
                    item
                    container
                    xs
                    justify='center'
                    alignItems='center'>


                    <Grid item>
                      <img
                        alt='qr logo'
                        src={QRHome}
                        style={{ width: matchesSM ? '8em' : '10em' }}
                      />
                    </Grid>


                    <Link to={'/'}>

                      <Grid item >
                        <img
                          className={classes.transform}
                          alt='headless wordpress front page'
                          src={HeadlessWPFrontpage}
                          style={{
                            width: matchesSM ? '8em' : '10em',
                          }}
                        />
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>


        {/* Grid Item Container for Text 1 */}
        <Grid item md >
          <Grid
            item
            container
            direction='column'>
            <Grid item className={classes.heroTextContainer}>
              <Typography
                variant='h4'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                # Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston.
                </Typography>
              <Typography
                variant='subtitle1'
                align={matchesMD ? 'center' : undefined}
                style={{
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>
                Kun käytät Headless-lähestymistapaa, sisällön näyttämiseen ei ole käyttöliittymää, ja järjestelmä koostuu vain tietokannasta ja API-puheluista.
              </Typography>
              <Typography
                variant='subtitle1'
                align={matchesMD ? 'center' : undefined}
                style={{
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>
                ! Lataa älypuhmilla qrkoodin avulla vieressä oleva sivusto ja katso miten ennennäkömäton nopeasti saa siellä liikkua vaikka on paljon kuvia. Lisäksi jos se sattuu oleman Sinun lemmikki ravintola saat laitta sen ikonin puhelimenn ja avata suoran sielta niin kui native appin..
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      {/* Second Row QR Block */}

      <Grid
        item
        container
        justify='center'
        alignItems='center'
        direction='row'
        className={classes.rowContainer}>

        {/* Grid Item Container for Card 2 */}
        <Grid item md>
          <Grid
            container
            justify='center'>
            <Card
              style={{ marginBottom: matchesMD ? '2em' : undefined }}
              className={classes.revolutionCard}>
              <CardContent >
                <Grid container>
                  <Grid
                    item
                    container
                    xs
                    justify='center'
                    alignItems='center'>


                    <Grid item>
                      <img
                        alt='qr logo'
                        src={QR}
                        style={{ width: matchesSM ? '8em' : '10em' }}
                      />
                    </Grid>


                    <Link to={'/'}>
                      <Grid item >
                        <img
                          alt='headless wordpress front page'
                          src={CafeteriaGatsbyFrontpage}
                          style={{ width: matchesSM ? '8em' : '10em' }}
                        />
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>


        {/* Grid Item Container for Text 1 */}
        <Grid item md>
          <Grid
            item
            container
            direction='column'>
            <Grid item className={classes.heroTextContainer}>
              <Typography
                variant='h4'
                align={matchesMD ? 'center' : undefined}
                paragraph>
                # Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa.
                </Typography>
              <Typography
                variant='subtitle1'
                align={matchesMD ? 'center' : undefined}
                style={{
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>
                Verkon tulevaisuus on mobiili ja sovellusliittymät. Jokainen verkkosivusto on verkkosovellus ja jokainen verkkosovellus on verkkosivusto.
              </Typography>
              <Typography
                variant='subtitle1'
                align={matchesMD ? 'center' : undefined}
                style={{
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>
                Gatsby.js on yleinen JavaScript-kehys, jota olet odottanut.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}


export default QRTest1
import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../../../assets/images/3d-background-light.jpg'
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
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '1.2em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em',
      margin: '1rem',
      borderRadius: 0
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
              '72em'
      }}
      className={classes.mainContainer}
      className={classes.background}>


      {/* First QR Block */}
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        jutifyt='center'
        style={{ marginBottom: '6em' }}
        className={classes.rowContainer}>

        <Grid
          item
          container
          md
          justfy='center'
          alignItems='center'>
          <Grid item>
            <Card
              className={classes.revolutionCard}>
              <CardContent >
                <Grid container>

                  <Grid
                    item
                    container
                    justify='center'
                    alignItems='center'
                    style={{
                      marginTop: matchesXS ? '2em' :
                        matchesSM ? '4em' : undefined
                    }} >

                    <Grid item>
                      <img
                        alt='qr logo'
                        src={QRHome}
                        style={{ width: matchesSM ? '8em' : '10em' }}
                      />
                    </Grid>

                    <Grid item container justify='center' sm>
                      <Link to={'/estimate/'}>
                        <Grid item >
                          <img
                            alt='headless wordpress front page'
                            src={HeadlessWPFrontpage}
                            style={{ width: matchesSM ? '8em' : '10em' }} />

                        </Grid>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <div className={classes.revolutionBackground} />
        </Grid>



        {/* Text part of the First row  */}
        <Grid
          item
          container
          md
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
        jutifyContent='center'>

        {/* <div className={classes.revolutionBackground} /> */}

        {/* Text Section  */}
        <Grid
          item
          container
          md
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

        {/* Card Section */}

        <Grid
          item
          container
          md
          justfy='center'
          alignItems='center'>
          <Card
            className={classes.revolutionCard}>
            <CardContent >
              <Grid container>
                <Grid
                  item
                  container
                  justify='center'
                  alignItems='center'
                  style={{
                    marginTop: matchesXS ? '2em' :
                      matchesSM ? '4em' : undefined
                  }}>


                  <Grid item>
                    <img
                      alt='qr logo'
                      src={QR}
                      style={{ width: matchesSM ? '8em' : '10em' }}
                    />
                  </Grid>

                  <Grid item container justify='center' sm>
                    <Link to={'/estimate/'}>
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default GraphQLBlock
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import infoBackground from '../../../assets/images/3d-background-light.jpg'
import wordpressgatsbyLogo from '../../../assets/images/GatsbyWordpressLogos Rounded.png'
import devices from '../../../assets/images/tech-devices-transparent.png'

import ButtonArrow from '../../original'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '6em',
    [theme.breakpoints.down('md')]: {
      marginTop: '6em'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
    },
  },
  rowContainer: {
    paddingLeft: '4em',
    paddingRight: '4em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2em',
      paddingRight: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.grey4,
    borderRadius: 50,
    height: 45,
    width: 200,
    marginBottom: '3em',
    fontSize: '1rem',
    fontWeight: 300,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },

  buttonContainer: {
    marginTop: '1.8em',
    align: 'center'
  },

  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 500,
    height: 45,
    width: 200,
    marginBottom: '3em',
    underline: 'none !important',
    '&:hover': {
      backgroundColor: theme.palette.common.grey1,
    }
  },

  logos: {
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0
    }
  },

  devices: {
    [theme.breakpoints.down('sm')]: {
      width: '30em',
      //paddingTop: '2em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.down('md')]: {
      width: '40em',
      paddingTop: '2em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.down('lg')]: {
      width: '40em',
      paddingTop: '3em',
      paddingBottom: '3em',
    },
    [theme.breakpoints.down('xl')]: {
      width: '60em',
      paddingTop: '2em',
      paddingBottom: '3em',
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
      paddingTop: '4em'
    },

    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      paddingTop: '4em',
    },
  }

}))

const LandingBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid container
      direction='row'
      style={{ height: '80em' }}
      justify='center'
      alignItems='flex-start'
      className={classes.infoBackground}>

      {/* Headign */}

      <Grid item container
        justify='center'
        className={classes.rowContainer}
        style={{
          maxWidth: matchesXS ? 400 : '56em',
          paddingTop: matchesSM ? '4em' : '6em'
        }}>

        <Typography
          variant={
            matchesXS ? 'h6' :
              matchesSM ? 'h5' :
                matchesMD ? 'h4' : 'h1'}
          align='center'
        >
          Yksi sisällönhallintajärjestelmä,
          useita etusivuja. Tiedot ovat
          käytettävissä automaattisesti monella laitteella samanaikaisesti.
        </Typography>
      </Grid>

      <Grid
        container
        justify='center'
        alignItems='flex-start'
        style={{ marginTop: matchesSM ? '-2em' : matchesMD ? 0 : '-6em' }}
      >
        <img alt='possible devices for headless wordpress'
          src={devices}
          className={classes.devices} />
      </Grid>


      <Grid item
        container
        style={{
          textAlign: matchesXS ? 'center' : 'inherit',
          marginBottom: '6em',
          marginTop: '-8em',
        }}
        direction={matchesMD ? 'column' : 'row'}
        spacing={matchesMD ? 8 : 'inherit'}>

        {/* Left side text block */}
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          direction='column'
          md >

          <Grid
            item
            container
            className={classes.heroTextContainer} >

            <Grid item>
              <Typography
                variant='body1'
                gutterBottom
                style={{
                  textIndent: matchesMD ? undefined : '1em',
                  textAlign: matchesMD ? 'center' : undefined,
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>
                Voit käyttää "Headless WordPressiä" julkaistaksesi verkkosivustosi sisältöä esimerkiksi Facebook-sivullasi, Googlen' My Business -luettelossa tai yrityksesi wikissä. Tämä lähestymistapa on hyödyllinen, jos haluat julkaista sisältösi mobiilisovelluksissa, staattisissa verkkosivustoissa tai edistyneissä verkkosovelluksissa.
              </Typography>

              <Typography variant='body1'
                gutterBottom
                style={{
                  textIndent: matchesMD ? undefined : '1em',
                  textAlign: matchesMD ? 'center' : undefined,
                  fontSize: matchesXS ? '0.9rem' :
                    matchesSM ? '1rem' : '1.1rem'
                }}>

                Gatsbyn lisääminen on loistava tapa lisätä nykyaikaisia suorituskykyä, skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja samalla kun WordPress tarjoaa tutun sisällön luomisen käyttöliittymän.
              </Typography>
            </Grid>

            {/* Buttons section */}
            <Grid item container
              justify='center'
              alignItems='center'
              direction={matchesSM ? 'column' : 'row'}
              className={classes.buttonContainer}>

              {/* Ilmainen arvio button */}
              <Grid item container justify='center' sm>
                <Button

                  variant='contained'
                  className={classes.estimateButton}
                >
                  Ilmainen Arvio
                  </Button>
              </Grid>

              {/* Katso lisaa button */}
              <Grid item container justify='center' sm>
                <Link to={'/estimate/'}>
                  <Button
                    underlineNone
                    variant='outlined'
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10, textDecoration: 'none !important' }}>Katso Lisää</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.Grey4}
                    />
                  </Button>
                </Link>
              </Grid>

            </Grid>
          </Grid>

        </Grid>


        {/* Right side Logos block */}
        <Grid item container
          justify='center'
          alignItems='center'
          md
          className={classes.logos} >

          <Grid item>
            <img
              alt='wordpress gatsby logo'
              src={wordpressgatsbyLogo}
              style={{
                height: matchesMD ? '10em' : '12em',
                marginBottom: matchesMD ? '5em' : 0,
                marginTop: matchesMD ? '-5em' : 0
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default LandingBlock

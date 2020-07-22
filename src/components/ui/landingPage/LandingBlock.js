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
    marginRight: 40,
    fontSize: '1rem',
    fontWeight: 300,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },

  buttonContainer: {
    marginTop: '1.8em'
  },

  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 500,
    height: 45,
    width: 200,
    underline: 'none !important',
    '&:hover': {
      backgroundColor: theme.palette.common.grey1,
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '1.1rem',
    fontWeight: 500,
    height: 40,
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: '1em',
    '&:hover': {
      backgroundColor: theme.palette.common.orange2
    },
  },
  logos: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  devices: {
    margin: '2em',
    width: '60em',
    [theme.breakpoints.down('md')]: {
      width: '40em',
      marginTop: '-2em',
      [theme.breakpoints.down('sm')]: {
        width: '30em',
        marginTop: '2em',
        marginBottom: '4em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '24em',
        marginBottom: '4em'

      },
    },
  },
  heroTextContainer: {
    width: '46em',
    [theme.breakpoints.down('md')]: {
      width: '40em',
      marginBottom: '2em',
      marginTop: '4em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '32em',
      marginTop: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '24em'
    }
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
          variant={matchesSM ? 'h6' : 'h1'}
          align='center'
        >
          Yksi sisällönhallintajärjestelmä,
          useita etusivuja. Tiedot ovat
          käytettävissä automaattisesti usealla laitteella samanaikaisesti.
        </Typography>
      </Grid>

      <Grid
        container
        justify='center'
        alignItems='flex-start'
        style={{ marginTop: matchesSM ? '1em' : matchesMD ? '-2em' : '-8em' }}
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
        <Grid item
          md
          style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>

          <Grid container
            justify='center'
            alignItems='center'
            direction='column'>

            <Grid item
              className={classes.heroTextContainer}>

              <Typography variant='body1'
                gutterBottom
                style={{
                  textIndent: '1em',
                  align: 'center'
                }}>
                Voit käyttää "Headless WordPressiä" julkaistaksesi verkkosivustosi sisältöä Facebook-sivullasi, Google My Business -luettelossa tai yrityksesi wikissä. Tämä lähestymistapa on hyödyllinen, jos haluat julkaista sisältösi mobiilisovelluksissa, staattisissa verkkosivustoissa tai edistyneissä verkkosovelluksissa.
              </Typography>

              <Typography variant='body1'
                gutterBottom
                style={{
                  textIndent: '1em',
                  align: 'center'
                }}>

                Gatsbyn lisääminen on loistava tapa lisätä nykyaikaisia suorituskykyä, skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja samalla kun WordPress tarjoaa tutun sisällön luomisen käyttöliittymän.
              </Typography>
            </Grid>

            {/* Buttons section */}
            <Grid container
              justify='center'
              direction='row'
              className={classes.buttonContainer}>

              {/* Ilmainen arvio button */}
              <Grid item>
                <Button
                  variant='contained'
                  className={classes.estimateButton}
                >
                  Ilmainen Arvio
                  </Button>
              </Grid>

              {/* Katso lisaa button */}
              <Grid item>
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
        <Grid item
          md
          className={classes.logos}
        >
          <Grid container
            justify='center'
            alignItems='center'
            direction='row'>

            <img
              alt='wordpress gatsby logo'
              src={wordpressgatsbyLogo}
              style={{
                height: '12em',
                maxWidth: matchesSM ? 300 : '40em',
                marginRight: matchesMD ? 0 : '3em',
                marginBottom: matchesMD ? '5em' : 0
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default LandingBlock

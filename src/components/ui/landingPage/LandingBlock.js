import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import infoBackground from '../../../assets/images/3d-background-light.jpg'
import wordpressgatsbyLogo from '../../../assets/images/GatsbyWordpressLogos Rounded.png'
import devices from '../../../assets/images/multiple-devices-cms.png'

import ButtonArrow from '../../original'

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
      paddingLeft: '0.6em',
      paddingRight: '0.6em',
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
    width: '20em'
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
          paddingTop: matchesSM ? '3em' : '6em'
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
          marginBottom: '6em'
        }}
        direction={matchesXS ? 'column' : 'row'}
        spacing={matchesXS ? 8 : 'inherit'}>

        {/* Left side text block */}
        <Grid item
          sm
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
                Voit käyttää "Headless WordPressiä" julkaistaksesi verkkosivustosi sisältöä Facebook-sivullasi, Google My Business -luettelossa tai yrityksesi wikissä. Tämä lähestymistapa on hyödyllinen, jos haluat julkaista sisältösi mobiilisovelluksissa, staattisissa verkkosivustoissa tai edistyneissä verkkosovelluksissa.
            </Typography>

              <Typography variant='body1'
                gutterBottom
                style={{ textIndent: '2em' }}
              >
                Gatsbyn lisääminen on loistava tapa lisätä nykyaikaisia suorituskykyä, skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja samalla kun WordPress tarjoaa tutun sisällön luomisen käyttöliittymän.
            </Typography>
              <Grid container
                justify='center'
                direction='row'
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.estimateButton}
                  >
                    Ilmainen Arvio
                  </Button>
                </Grid>


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
        </Grid>


        {/* Right side Logos block */}
        <Grid item
          sm
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

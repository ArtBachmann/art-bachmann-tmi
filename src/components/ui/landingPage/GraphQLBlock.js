import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GraphQLLogo from '../../../assets/images/Graphql-transparent.png'

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
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
    }
  },
  GraphQLBackground: {
    backgroundColor: '#FFFFFF',
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
    margin: '3em',
    width: '26em'
  }
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
      style={{ height: '30em' }}
      justify='center'
      alignItems='center'
      className={classes.GraphQLBackground}>

      <Grid item
        container
        style={{
          textAlign: matchesXS ? 'center' : 'inherit'
        }}
        direction={matchesXS ? 'column' : 'row'}
        spacing={matchesXS ? 8 : 'inherit'}>

        {/* Left side Logo block */}
        <Grid item
          sm
          className={classes.logos}
        >
          <Grid container
            justify='center'
            alignItems='center'
            direction='row'>

            <img
              alt='graphql logo'
              src={GraphQLLogo}
              style={{
                height: '12em',
                maxWidth: matchesSM ? 300 : '40em',
                marginRight: matchesMD ? 0 : '3em',
                marginBottom: matchesMD ? '5em' : 0
              }}
            />
          </Grid>
        </Grid>

        {/* Right side text block */}

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
              <Typography align='center' variant='body1' >
                <Typography align='center' variant='body1' >
                  Gatsby on hieno tapa luoda staattinen sivusto React.js:n avulla. Tämän lisäksi yksi Gatsbyn huippuominaisuuksista on, että se voi tuoda sisältöä monista eri lähteistä, mukaan lukien WordPress.
            </Typography>
              </Typography>
              <Typography align='center' variant='body1' >
                gatsby on nopea kaikella tavalla, jolla on merkitystä
            </Typography>

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
    </Grid>


  )
}

export default GraphQLBlock
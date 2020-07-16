import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import QR from '../../../assets/images/artbachmann.eu.png'

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
  background: {
    backgroundColor: '#FFFFFF',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
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
      style={{ height: '30em' }}
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
        <Grid item
          sm
          className={classes.qr}
        >
          <Grid container
            justify='center'
            alignItems='center'
            direction='row'>

            <img
              alt='qr logo'
              src={QR}
              style={{
                height: '14em',
                maxWidth: matchesSM ? 300 : '20em',
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
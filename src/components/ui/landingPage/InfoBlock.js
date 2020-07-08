import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import infoBackground from '../../../assets/images/3d-background.jpg'

//import infoBackground from '../../../assets/svg/infoBackground.svg'
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
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
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
}))

const InfoBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container
      direction='row'
      style={{ height: '40em' }}
      alignItems='center'
      className={classes.infoBackground}>
      <Grid item
        container
        style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
        direction={matchesXS ? 'column' : 'row'}
        spacing={matchesXS ? 8 : 'inherit'}>
        <Grid item
          sm
          style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>
          <Grid container
            direction='column'>
            <Typography variant='h2'>
              About Us
              </Typography>
            <Typography variant='subtitle2'>
              Let's get personal.
              </Typography>
            <Grid item>
              <Button
                variant='outlined'
                className={classes.learnButton}
                style={{ color: 'white', borderColor: 'white' }}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill='white'
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item
          sm
          style={{
            marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
            textAlign: matchesXS ? 'center' : 'right'
          }}>
          <Grid container
            direction='column'>
            <Typography variant='h2'>
              Contuct Us
              </Typography>
            <Typography variant='subtitle2'>
              Call Us and Say Hello.
              </Typography>
            <Grid item>
              <Button
                variant='outlined'
                className={classes.learnButton}
                style={{ color: 'white', borderColor: 'white' }}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill='white'
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default InfoBlock

//   < Grid container
// direction = 'column'
// className = { classes.mainContainer } >
//   <Grid item>
//   {/* The Information Block. */}


//   </Grid>
//     </Grid >


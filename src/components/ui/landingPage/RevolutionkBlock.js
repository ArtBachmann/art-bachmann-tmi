import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../../original'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../../../assets/images/3d-background-light.jpg'

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
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 500,
    height: 45,
    width: 200,
    '&:hover': {
      backgroundColor: theme.palette.common.grey1,
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '8em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '6em',
      paddingBottom: '6em',
      paddingLeft: 0,
      paddingRight: 0,
      margin: '1rem',
      borderRadius: 0
    }
  }
}))

const Revolution = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Grid container
      style={{ height: '55em', marginTop: '2em' }}
      alignItems='center'
      justify='center'>
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container
            direction='column'
          >
            <Grid item>
              <Typography variant='h2'
                gutterBottom>
                Päättömän WordPressin käytön edut:
                </Typography>
            </Grid>
            <Grid item container
              direction='column'
              justify='flex-start'
            >
              <Grid item>
                <Typography variant='subtitle1'
                  gutterBottom>
                  # Monikanavainen sisällönjulkaisu
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1'
                  gutterBottom>
                  # Enemmän kevyitä ja yksinkertaisempia uudelleensuunnitteluja

                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1'
                  gutterBottom>
                  # Erittäin nopea suorituskyky
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1'
                  gutterBottom>
                  #Parempi skaalautuvuus
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1'
                  gutterBottom>
                  # Monikanavainen sisällönjulkaisu
                </Typography>
              </Grid>
              <Button
                variant='outlined'
                className={classes.learnButtonHero}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.Grey4}
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionBackground} />
    </Grid>
  )
}

export default Revolution

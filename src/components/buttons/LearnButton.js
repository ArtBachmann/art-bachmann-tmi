import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import ButtonArrow from '../../components/original'


const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '1.1rem',
    fontWeight: 500,
    height: 40,
    paddingRight: 12,
    paddingLeft: 12,
    '&:hover': {
      backgroundColor: theme.palette.common.grey2
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: '2em'
    }
  },
}))

const LearnButton = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid Grid container item
      justify={matchesMD ? 'center' : 'undefined'} >
      <Button
        variant='outlined'
        className={classes.learnButton}>
        <span>
          Learn More
        </span>
        <ButtonArrow
          width={15}
          height={15}
          fill={theme.palette.common.gray4}
        />
      </Button>
    </Grid>
  )

}



export default LearnButton

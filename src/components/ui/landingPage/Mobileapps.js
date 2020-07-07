// import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import { makeStyles, useTheme } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
// import ButtonArrow from '../original'
// import Typography from '@material-ui/core/Typography'
// import useMediaQuery from '@material-ui/core/useMediaQuery'

// import mobileAppIcon from '../../../assets/mobileIcon.svg'

// const useStyles = makeStyles(theme => ({
//   mainContainer: {
//     marginTop: '5em',
//     [theme.breakpoints.down('md')]: {
//       marginTop: '3em'
//     },
//     [theme.breakpoints.down('xs')]: {
//       marginTop: '2em'
//     },
//   },
//   specialText: {
//     fontFamily: 'Teko',
//     fontSize: '1.4rem',
//     fontWeight: '300',
//     color: theme.palette.common.violet1
//   },
//   learnButton: {
//     ...theme.typography.learnButton,
//     fontSize: '1.1rem',
//     fontWeight: 500,
//     height: 40,
//     paddingRight: 12,
//     paddingLeft: 12,
//     marginTop: '1em',
//     '&:hover': {
//       backgroundColor: theme.palette.common.grey1
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: '2em',
//       marginTop: '1.4rem'
//     }
//   },
//   subtitle: {
//     marginBottom: '1em',
//     marginTop: '0.6em'
//   },
//   icon: {
//     marginLeft: '2em',
//     [theme.breakpoints.down('xs')]: {
//       marginLeft: 0
//     }
//   },
//   serviceContainer: {
//     marginTop: '8em',
//     [theme.breakpoints.down('sm')]: {
//       padding: '2em',
//       marginTop: '4em'
//     }
//   }
// }))

// const Mobileapps = () => {
//   const classes = useStyles()
//   const theme = useTheme()
//   const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
//   return (
//     <Grid container
//       direction='row'
//       className={classes.serviceContainer}
//       justify={matchesSM ? 'center' : 'flex-end'}>
//       <Grid item
//         style={{
//           textAlign: matchesSM ? 'center' : undefined
//         }} >
//         <Typography variant='h4'>
//           IOS/Android App Development
//               </Typography>
//         <Typography variant='subtitle1' className={classes.subtitle}>
//           Extend functionality. Extend Access. Increase Engagement.
//             </Typography>
//         <Typography variant='subtitle1'>
//           Integrate your web experience or create standalone {' '}

//               application{matchesSM ? null : <br />} with either  <span className={classes.specialText}>mobile platform.</span>
//         </Typography>
//         <Button variant='outlined'
//           className={classes.learnButton}>
//           <span style={{ marginRight: 10 }}>Learn More</span>
//           <ButtonArrow width={15} height={15}
//             fill={theme.palette.common.grey4} />
//         </Button>
//       </Grid>
//       <Grid item
//         style={{ marginRight: matchesSM ? 0 : '5em' }}>
//         <img
//           className={classes.icon}
//           alt='mobile phone icon'
//           src={mobileAppIcon}
//         />
//       </Grid>
//     </Grid>
//   )
// }

// export default Mobileapps

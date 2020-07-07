// import React from 'react'
// import { Link } from 'gatsby'
// import Lottie from 'react-lottie'
// import { makeStyles, useTheme } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import ButtonArrow from '../original'
// import Typography from '@material-ui/core/Typography'

// import animationData from '../../../animations/landinganimation/data'

// const useStyles = makeStyles(theme => ({
//   animation: {
//     maxWidth: '50em',
//     minWidth: '21em',
//     marginTop: '2em',
//     marginLeft: '10%',
//     [theme.breakpoints.down('sm')]: {
//       maxWidth: '30em'
//     }
//   },

//   estimateButton: {
//     ...theme.typography.estimate,
//     backgroundColor: theme.palette.common.grey4,
//     borderRadius: 50,
//     height: 45,
//     width: 145,
//     marginRight: 40,
//     fontSize: '1.2rem',
//     fontWeight: 300,
//     '&:hover': {
//       backgroundColor: theme.palette.secondary.light
//     }
//   },

//   buttonContainer: {
//     marginTop: '1.8em'
//   },

//   learnButtonHero: {
//     ...theme.typography.learnButton,
//     fontSize: '1.2rem',
//     fontWeight: 500,
//     height: 45,
//     width: 165,
//     underline: 'none !important',
//     '&:hover': {
//       backgroundColor: theme.palette.common.grey1,
//     }
//   },

//   mainContainer: {
//     marginTop: '5em',
//     [theme.breakpoints.down('md')]: {
//       marginTop: '3em'
//     },
//     [theme.breakpoints.down('xs')]: {
//       marginTop: '2em',
//     },
//   },

//   heroTextContainer: {
//     minWidth: '25.5em',
//     marginLeft: '2em',
//     [theme.breakpoints.down('xs')]: {
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     }
//   },

//   heading2: {
//     [theme.breakpoints.down('lg')]: {
//       fontSize: '2rem'
//     },
//     [theme.breakpoints.down('md')]: {
//       fontSize: '1.6rem'
//     },
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '1.4rem'
//     },
//     [theme.breakpoints.down('xs')]: {
//       fontSize: '1rem'
//     }
//   }
// }))

// const Hero = () => {
//   const classes = useStyles()
//   const theme = useTheme()

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   }

//   return (
//     <Grid container
//       direction='column'
//       className={classes.mainContainer}
//     >
//       <Grid item>
//         <Grid container
//           justify='flex-end'
//           alignItems='center'
//           direction='row'>
//           <Grid sm item
//             className={classes.heroTextContainer}
//           >
//             <Typography align='center' variant='h1' className={classes.heading2}>
//               The qualities of tomorrow's (top) worker - socially skilled, able to react to a rapidly changing work environment, change jobs or even a field. Is ready for continuous retraining and wants to learn continiously new ...
//             </Typography>
//             <Grid container
//               justify='center'
//               direction='row'
//               className={classes.buttonContainer}
//             >
//               <Grid item>
//                 <Button
//                   variant='contained'
//                   className={classes.estimateButton}
//                 >
//                   Free Estimate
//                   </Button>
//               </Grid>


//               <Grid item>
//                 <Link to={'/estimate/'}>
//                   <Button
//                     underlineNone
//                     variant='outlined'
//                     className={classes.learnButtonHero}
//                   >
//                     <span style={{ marginRight: 10, textDecoration: 'none !important' }}>Learn More</span>
//                     <ButtonArrow
//                       width={15}
//                       height={15}
//                       fill={theme.palette.common.Grey4}
//                     />
//                   </Button>
//                 </Link>
//               </Grid>

//             </Grid>
//           </Grid>
//           <Grid
//             sm
//             item
//             className={classes.animation}
//           >
//             <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default Hero
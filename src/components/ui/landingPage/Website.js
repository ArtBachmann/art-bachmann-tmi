// import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import { makeStyles, useTheme } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
// import ButtonArrow from '../original'
// import Typography from '@material-ui/core/Typography'
// import useMediaQuery from '@material-ui/core/useMediaQuery'

// import websitesIcon from '../../../assets/websiteIcon.svg'

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

// const Services = () => {
//   const classes = useStyles()
//   const theme = useTheme()
//   const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
//   return (
//     <Grid container
//       direction='column'
//       className={classes.mainContainer}
//     >
//       <Grid item>
//         {/* Websites Block ! */}
//         <Grid container
//           direction='row'
//           className={classes.serviceContainer}
//           justify={matchesSM ? 'center' : undefined}
//         >
//           <Grid item
//             style={{
//               marginLeft: matchesSM ? 0 : '5em',
//               textAlign: matchesSM ? 'center' : undefined
//             }}
//           >
//             <Typography variant='h4'>
//               Website Development
//               </Typography>
//             <Typography variant='subtitle1' className={classes.subtitle}>
//               Reach More. Discover More. Sell More.
//             </Typography>
//             <Typography variant='subtitle1'>
//               Optimize for search engines. Built for {' '}
//               <span className={classes.specialText}>speed.</span>
//             </Typography>
//             <Button variant='outlined'
//               className={classes.learnButton}
//             >
//               <span style={{ marginRight: 10 }}>Learn More</span>
//               <ButtonArrow width={15} height={15}
//                 fill={theme.palette.common.grey4} />
//             </Button>
//           </Grid>
//           <Grid item>
//             <img
//               className={classes.icon}
//               alt='custom websit icon'
//               src={websitesIcon}
//             />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default Services

import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'


// import background from '../../../assets/background.jpg'
// import mobileBackground from '../../../assets/mobileBackground.jpg'
import phoneIcon from '../../../assets/svg/phone.svg'
import emailIcon from '../../../assets/svg/email.svg'
import airplane from '../../../assets/svg/send.svg'
import Art from '../../../assets/images/artbachmann.jpg'

import ButtonArrow from '../../original'


const useStyles = makeStyles(theme => ({
  // background: {
  //   backgroundImage: `url(${background})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'fixed',
  //   height: '60em',
  //   paddingBottom: '10em',
  //   [theme.breakpoints.down('md')]: {
  //     backgroundImage: `url(${mobileBackground})`
  //   }
  // },
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
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.grey4,
    borderRadius: 50,
    height: 55,
    width: 200,
    marginRight: 190,
    fontSize: '1.4rem',
    fontWeight: 300,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: '2em'
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.violet1}`,
    marginTop: '4em',
    borderRadius: 7,
  },
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.grey4,
    borderRadius: 50,
    height: 50,
    width: 185,
    fontSize: '1.2rem',
    fontWeight: 300,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    }
  }
}))

const Contact = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)

  const [loading, setLoading] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: ''
  })


  const onChange = event => {
    let valid

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
          .test(event.target.value)

        if (!valid) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }

        break
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          .test(event.target.value)
        if (!valid) {
          setPhoneHelper('Invalid Phone')
        } else {
          setPhoneHelper('')
        }
        break
      default:
        break
    }
  }


  // useEffect(() => {
  //   fetch('https://us-central1-material-ui-gatsby.cloudfunctions.net/sendMail'
  //     , { mode: 'no-cors' })
  //     .then(res => console.log(res))
  // })

  const onConfirm = () => {
    setLoading(true)
    axios
      .get(
        'http://us-central1-material-ui-gatsby.cloudfunctions.net/sendMail',
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message
          }
        })
      .then(res => {
        setLoading(false)
        setOpen(false)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4BB543'
        })
      })
      .catch(err => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again',
          backgroundColor: '#FF3232'
        })
      })
  }


  const buttonContents = (
    <>
      <span style={{ paddingTop: '0.2em' }}>
        Send Message
      </span>
      <img
        src={airplane}
        alt='paper airplane'
        style={{ marginLeft: '0.6em' }} />
    </>
  )



  return (
    <Grid container direction='row'
      style={{ marginTop: matchesMD ? undefined : '2em' }}>

      {/* Contuct us column with data begins */}
      <Grid item container direction='column'
        alignItems='center'
        style={{
          marginBottom: matchesMD ? '4em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '2em' : '3em'
        }}
        justify='center'
        lg={4}
        xl={3}>

        <Grid item>
          <Grid container direction='column'>

            {/* Grid items for heading and subheading */}
            <Grid item>
              <Typography variant='h3'
                align={matchesMD ? 'center' : undefined}>
                Contact Us
              </Typography>
              <Typography variant='body1'
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.violet1 }}>
                We're waiting
              </Typography>
            </Grid>

            {/* Grid container holding phone details */}
            <Grid item container
              style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone icon'
                  style={{ marginRight: '0.5em' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1'
                  style={{ color: theme.palette.common.violet1, fontSize: '1em' }}>
                  <a href='tel:4455667788'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}>(555) 444-3333</a>
                </Typography>
              </Grid>
            </Grid>

            {/* Grid container holding mail details */}
            <Grid item container
              style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon} alt='phone icon'
                  style={{ marginRight: '0.5em' }} />

              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.violet1, fontSize: '1em' }}>
                  <a href='mailto:bachmann.art@gmail.com'
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}>bachmann.art@gmail.com</a>
                </Typography>
              </Grid>
            </Grid>

            {/* Text fields for input info */}
            <Grid item container
              direction='column'
              style={{ maxWidth: '20em' }}>

              <Grid item
                style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Name'
                  id='name'
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)} />
              </Grid>

              <Grid item
                style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Email'
                  id='email'
                  value={email}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  onChange={onChange} />
              </Grid>

              <Grid item
                style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Phone'
                  id='phone'
                  value={phone}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  onChange={onChange} />
              </Grid>
            </Grid>

            {/* Message text field */}
            <Grid item>
              <TextField
                value={message}
                id='message'
                fullWidth
                style={{ maxWidth: '20em' }}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={6}
                onChange={(event) => setMessage(event.target.value)} />
            </Grid>

            {/* Button  */}
            <Grid item container
              justify='space-around'
              style={{ marginTop: '2em', marginBottom: '1.5em' }}>
              <Button
                variant='contained'
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0
                }
                className={classes.sendButton}>
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Dialog section */}
      <Dialog
        maxWidth='lg'
        fullWidth={matchesXS}
        style={{ zIndex: '1302' }}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? 0 : '5em',
            paddingBottom: matchesXS ? 0 : '5em',
            paddingLeft: matchesXS ? 0 : matchesSM ? '4em' : matchesMD ? '10em' : '16em',
            paddingRight: matchesXS ? 0 : matchesSM ? '4em' : matchesMD ? '10em' : '16em',
          }
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4'
                align='center'
                gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item
              style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                value={name}
                fullWidth
                onChange={(event) => setName(event.target.value)} />
            </Grid>

            <Grid item
              style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                id='email'
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                onChange={onChange} />
            </Grid>

            <Grid item
              style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phome'
                id='phone'
                value={phone}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                onChange={onChange} />
            </Grid>


            {/* Message text field */}
            <Grid item>
              <TextField
                value={message}
                id='message'
                fullWidth
                style={{ maxWidth: matchesXS ? '100%' : '20em' }}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={6}
                onChange={(event) => setMessage(event.target.value)} />
            </Grid>

            <Grid item
              container direction={matchesSM ? 'column' : 'row'}
              alignItems='center'
              justify='center'
              style={{ marginTop: '0.4em', marginBottom: '1.2em' }}>
              <Grid item>
                <Button color='primary'
                  onClick={() => setOpen(false)}>
                  Cancel
              </Button>
              </Grid>
              <Grid item style={{ marginTop: '0.4em' }}>
                <Button
                  variant='contained'
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    phone.length === 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0
                  }
                  className={classes.sendButton}
                  onClick={onConfirm}>
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000} />



      {/* Right side column starts */}

      <Grid item container
        lg={8}
        xl={9}
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}
        className={classes.background}>

        {/* Text and buttons on the background image */}
        <Grid item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}>
          <Grid container
            direction='column'>
            <Grid item>
              <Typography
                variant='h3'
                align={matchesMD ? 'center' : undefined}>
                Simple Software. <br /> Revolutionary Results.
            </Typography>
              <Typography
                variant='subtitle2'
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.4rem', marginBottom: '1.6em' }}>
                Take advantage of the 21st century.
            </Typography>
              <Grid item lg>
                <img
                  src={Art}
                  alt="headless wordpress workflow"
                  style={{
                    width: '18em',
                    maxWidth: matchesSM ? 300 : "16em",
                    marginRight: matchesMD ? 0 : "5em",
                    marginBottom: matchesMD ? "5em" : 0
                  }}
                />
              </Grid>
              <Grid container item
                justify={matchesMD ? 'center' : 'undefined'}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <Button
            className={classes.estimateButton}
            variant='contained'>
            Free Estimate
            </Button>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Contact
import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import WordPressPublishing from '../../../assets/images/multipleCMS.png'
import ACF from '../../../assets/images/acf-screenshot.png'
import CPT from '../../../assets/images/CPT UI-screenshot.png'
import JAMstack from '../../../assets/images/jamstack1.png'

import Icon from '@mdi/react'
// Konsultointi
import { mdiAccountGroupOutline } from '@mdi/js';
// Launch
import { mdiApplicationExport } from '@mdi/js';
// Mockup
import { mdiBallotOutline } from '@mdi/js'

// Design
import { mdiContentSaveEditOutline } from '@mdi/js';

// Review
import { mdiCertificateOutline } from '@mdi/js';

// Build 
import { mdiCogSyncOutline } from '@mdi/js';

// Maintain
import { mdiCodeTagsCheck } from '@mdi/js';

// Iterate
import { mdiCalendarSyncOutline } from '@mdi/js';

// Office Icons
import { PeopleSittingAroundTable } from '../../../assets/images/oi-people-sitting.png'


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '8em',
    paddingRight: '8em',
    paddingTop: '1em',
    paddingBottom: '2em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2.4em',
      paddingRight: '2.4em',
      paddingBottom: '2em',
      paddingTop: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      paddingBottom: '2em',
      paddingTop: '0.6em'
    },
  },
  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}))

const Revolution = () => {

  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Grid container direction="column">

      {/* Heading text */}
      <Grid
        container
        item
        justify='center'
        style={{ marginTop: matchesMD ? "1em" : "4em" }}
      >
        <Typography
          align='center'
          style={{ maxWidth: '80%', marginTop: '3em' }}
          variant="h1"
        >
          Tosiasia on, että tietomme rikkautuvat ja rikkaampivat ajan myötä, ja käyttäjien tarve monipuolistuu edelleen, koska ne ovat eri tilanteissa eri laitteilla.
          Voimme rakentaa tulevaisuuteen nyt käyttämällä WordPressiä päättömänä CMS: nä
        </Typography>
      </Grid>



      {/* 1 Section Technology used */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}>

        <Grid item lg>
          <img
            src={WordPressPublishing}
            alt="headless wordpress workflow"
            style={{
              width: '26em',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item lg>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Kaytetty teknologia
              </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
              </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
              </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/*2. section: Advanced Custom Fields */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}>


        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item lg>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Advanced Custom Fields
              </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
              </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
              </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify='space-around'
          lg>
          <img
            src={ACF}
            alt="advanced custom fields explanation"
            style={{
              width: '32em',
              maxWidth: matchesSM ? 300 : "32em",
              marginLeft: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />

          <Link to='/'>
            <Typography variant='h6'>
              Katso iso kuva
            </Typography>
          </Link>
        </Grid>
      </Grid>


      {/* Custom Post Types */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={CPT}
            alt="mountain through binoculars"
            style={{
              width: '26em',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Custom Post Types
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/* Client Blocks start */}
      <Grid
        item
        container
        direction="row"
        alignItems='center'
        justify="center"
        className={classes.rowContainer}
        style={{ backgroundColor: "#80a8aa", height: "8em" }}>

        <Grid item>
          <Typography variant="h4"
            style={{ color: 'white' }}
            gutterBottom>
            Protsessi
          </Typography>
        </Grid>
      </Grid>


      {/* 1. Section Konsultointi */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#BDBDBD", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          justify={matchesSM ? 'flex-start' : 'center'}
          alignItems='center'
          style={{ maxWidth: "38em" }}
          md>

          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Konsultointi
            </Typography>
          </Grid>

          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant={matchesSM ? 'body2' : 'body1'}
              align={matchesMD ? "center" : 'left'}
              style={{ color: "#274549" }}
              paragraph
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>


      {/* 2. Section: Malli */}
      {/* Texts in english must be looked over because double the previous ones... */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#757575", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Malli
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>

      {/*3. Review Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#607D8B", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
            </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>

      {/* Design Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#274549", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
            </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>

      {/* Build Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#CFD8DC", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              Here’s where we get down to business.
              Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              Each area is then developed in order of importance until ready to be connected to the next piece.
            </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>


      {/* Launch Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#607D8B", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems='center'>

          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              The moment we’ve all been waiting for.
              When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>


      {/* Maintain Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#455A64", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Our work doesn’t end there.
              After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available
            </Typography>

          </Grid>
        </Grid>

        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>

      {/* Iterate Section */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : 'center'}
        style={{ backgroundColor: "#a5c0ad", height: "42em" }}>

        <Grid
          item
          container
          direction="column"
          lg
          justify='center'
          alignItems={matchesMD ? "center" : 'center'}>


          <Grid item container justify='flex-start'>
            <Typography
              align='center'
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "1em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#274549", maxWidth: "20em" }}
              paragraph
            >
              By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.
            </Typography>

          </Grid>
        </Grid>

        <Grid
          item
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{ alignSelf: "center" }}>
          <img
            src={JAMstack}
            width="100%"
            alt="basic website design outline"
            style={{ maxWidth: 1000, marginTop: '4em' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revolution

import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import WordPressPublishing from '../../../assets/images/multipleCMS.png'
import JAMstack from '../../../assets/images/jamstack1.png'

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '8em',
    paddingRight: '8em',
    paddingTop: '4em',
    paddingBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      paddingBottom: '1em',
      paddingTop: '1em'
    }
  },
}))

const Revolution = () => {

  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Grid container
      direction='column'>

      {/* The Revolution Heading Section */}
      <Grid item
        className={classes.rowContainer}>
        <Typography variant='h1'
          align={matchesMD ? 'center' : undefined}>
          Ratkaisut
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6'
          align='left'
          paragraph>
          TULEVAISUUS on (todennäköisesti) päätön
          Joten mikä tulevaisuus tulee olemaan? Se tulee todennäköisesti päättömäksi. Kuka tietää? Tosiasia on, että tietomme rikkautuvat ja rikkaampivat ajan myötä, ja käyttäjien tarve monipuolistuu edelleen, koska ne ovat eri tilanteissa eri laitteilla.
          Voimme rakentaa tulevaisuuteen nyt käyttämällä WordPressiä päättömänä CMS: nä.
            </Typography>
      </Grid>

      {/* Firs Section (vision) of Revolution Page */}
      <Grid item container
        alignItems='center'
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}>

        <Grid item lg>
          <img src={WordPressPublishing} alt='wordpress publishing workflow'
            style={{
              width: matchesSM ? 300 : '24em',
              marginRight: matchesMD ? 0 : '2em',
              marginBottom: matchesMD ? '5em' : 0
            }} />
        </Grid>
        <Grid item container lg
          style={{ marginLeft: '3em', maxWidth: '40em' }}
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              align='left'
              gutterBottom>
              Ratkaisut
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              align='left'
              paragraph>
              Vaikka voit edelleen käyttää WordPress-taustajärjestelmää julkaisemiseen, REST-sovellusliittymä antaa sinulle vapauden valita suosikkikehyksesi käyttöliittymäsuunnittelua varten. Se voi olla ReactJS, VueJS, Gatsby tai jokin viela olematon muu kokonaan.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              align='left'
              paragraph>
              Tästä lähestymistavasta voi hyötyä monentyyppisissä hankkeissa. Esimerkiksi esityssivustot tai sivustot, jotka käyttävät WordPressiä taustakuvana, ovat tärkeimmät ehdokkaat irrotettuun lähestymistapaan.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              align='left'
              paragraph>
              Kun erotat etusivusi taustasta, on helpompaa suunnitella se tulevaisuudessa muuttamatta CMS: ää. Lisäksi käyttöliittymäkehittäjien on vain huolehdittava siitä, mitä tehdä taustaohjelman heille tarjoamiin tietoihin. Tämän avulla he voivat olla luovia ja käyttää moderneja kirjastoja, kuten ReactJS, Vue tai Angular, erittäin dynaamisten verkkosovellusten toimittamiseen. Esimerkiksi progressiivisen verkkosovelluksen rakentaminen on helpompaa, kun käytetään edellä mainittuja kirjastoja.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Section (Technology) of Revolution Page */}
      <Grid item container
        alignItems='center'
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}>
        <Grid item container lg
          style={{ marginLeft: '3em', maxWidth: '40em' }}
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              paragraph>
              TULEVAISUUS on (todennäköisesti) päätön
              Joten mikä tulevaisuus tulee olemaan? Se tulee todennäköisesti päättömäksi. Kuka tietää? Tosiasia on, että tietomme rikkautuvat ja rikkaampivat ajan myötä, ja käyttäjien tarve monipuolistuu edelleen, koska ne ovat eri tilanteissa eri laitteilla.
              Voimme rakentaa tulevaisuuteen nyt käyttämällä WordPressiä päättömänä CMS: nä.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              paragraph>
              No, she'll probably make me do it. Who are you, my warranty?! Noooooo! Your best is an idiot! Why am I sticky and naked? Did I miss something fun? Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              paragraph>
              Um, is this the boring, peaceful kind of taking to the streets? Oh, I think we should just stay friends. Meh. Who's brave enough to fly into something we all keep calling a death sphere? You can crush me but you can't crush my spirit!
            </Typography>
          </Grid>
        </Grid>
        <Grid item container
          justify={matchesMD ? 'center' : 'flex-end'} lg>
          <img src={JAMstack}
            style={{ maxWidth: '22em', margin: 0 }}
          />
        </Grid>
      </Grid>

      {/* Process Sections Start */}
      <Grid item container
        className={classes.rowContainer}
        direction='row'
        justify='center'>
        <Grid item>
          <Typography variant='h4'
            gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>

      {/* Consultation Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#a0afb2', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='handshake'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Mockup Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#009688', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='mockup illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Review Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#455A64', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='review illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Design Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#512DA8', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='design illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Build Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#FF9800', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='build illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Launch Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#CDDC39', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#000', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='launch illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Maintain Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#607D8B', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='maintain illustration'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>

      {/* Iterate Section */}
      <Grid item container
        className={classes.rowContainer}
        style={{ background: '#303F9F', height: '60em' }}
        direction='row'
        justify='center'>
        <Grid item container lg
          direction='column'>
          <Grid item>
            <Typography variant='h4'
              style={{ color: '#000', }}
              gutterBottom>
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              Soon enough. And from now on you're all named Bender Jr. Yes! In your face, Gandhi! You're going to do his laundry? Good news, everyone! There's a report on TV with some very bad news!
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              No! The kind with looting and maybe starting a few fires! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be…
            </Typography>
            <Typography variant='body1'
              style={{ color: '#fff', maxWidth: '22em' }}
              paragraph>
              It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. Aww, it's true. I've been hiding it for so long.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg
          style={{ alignSelf: 'center' }}>
          <img src={JAMstack}
            alt='iterate'
            style={{ maxWidth: '36em', maxHeight: '36em' }} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Revolution

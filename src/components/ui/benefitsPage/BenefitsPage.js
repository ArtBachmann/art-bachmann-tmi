import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'


import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CropRotateIcon from '@material-ui/icons/CropRotate';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HttpsIcon from '@material-ui/icons/Https';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '3em',
      marginRight: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2em',
      marginRight: '2em'
    },
  },
  specialText: {
    fontFamily: 'Teko',
    fontSize: '1.4rem',
    fontWeight: '300',
    color: theme.palette.common.violet1
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
      backgroundColor: theme.palette.common.grey1
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
      marginTop: '1.4rem'
    },
    textDecorationColor: 'white'
  },
  subtitle: {
    marginBottom: '1em',
    marginTop: '0.6em'
  },
  icon: {
    marginLeft: '2em',
    marginRight: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('md')]: {
      marginTop: '7em'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '5em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
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

const Services = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container
      direction='column'
      className={classes.mainContainer}>

      <Grid item
        container
        justify='center'>
        <Typography
          style={{
            marginTop: matchesSM ? '1em' : '3em',
            maxWidth: '55%',
            textAlign: 'center'
          }}
          variant='h1'
          gutterBottom>
          WordPressin käyttäminen Headless CMS-laitteena tarjoaa useita etuja verkkosivustojen omistajille seka loppukäyttäjille.
        </Typography>
      </Grid>



      {/* Starting Benefits blocks */}
      {/* # Monikanavainen sisällönjulkaisu*/}
      <Grid item>
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify='center'
          style={{
            marginTop: matchesSM ? '1em' : '8em'
          }}>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <DevicesOtherIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>

          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>

            <Typography variant='h4'>
              # Monikanavainen sisällönjulkaisu
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Yksi päättömän arkkitehtuurin käyttämisen merkittävimmistä eduista on, että sinulla on joustavuus julkaista sisältöäsi automaattisesti useilla kanavilla samanaikaisesti.
            </Typography>
            <Typography variant='subtitle1'>
              Static WordPressissä on keskitetty sisällönhallintajärjestelmä, joten sinun ei tarvitse huolehtia sisällön alustamisesta uudelleen jokaiselle alustalle. Sen sijaan sinun täytyy julkaista sisältö vain kerran, ja Headless-arkkitehtuuri hoitaa kaikki jalkatyöt puolestasi.
            </Typography>
          </Grid>
        </Grid>

        {/* 2. rivi >>> Enemmän kevyitä ja yksinkertaisempia uudelleensuunnitteluja */}
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid item md
            className={classes.item1}
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>
              # Enemmän kevyitä ja yksinkertaisempia uudelleensuunnitteluja
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Kun käytät Headless-lähestymistapaa, sisällön näyttämiseen ei ole käyttöliittymää, ja järjestelmä koostuu vain tietokannasta ja API-puheluista.
            </Typography>
            <Typography variant='subtitle1'>
              Seurauksena on, että tulevat uudelleensuunnittelut ovat entistä monimutkaisempia, koska voit suunnitella verkkosivustosi uudelleen kokonaan murto-osassa tavallista aikaa ilman, että itse CMS: ää olisi uusittava.
            </Typography>
            <Typography variant='subtitle1'>
              Siten se johtaa lopulta tyylikkään, nopeaan ja reagoivaan sisällön toimittamiseen.
            </Typography>
          </Grid>
          <Grid item container
            className={classes.item2}
            justify='center'
            alignItems='center'
            md>
            <CropRotateIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>
        </Grid>

        {/* Erittäin nopea suorituskyky */}
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <DirectionsRunIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}

            />
          </Grid>

          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>

            <Typography variant='h4'>
              # Erittäin nopea suorituskyky
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Verkkosivun nopeus on toinen alue, jolla Headless-arkkitehtuuri osoittautuu erittäin hyödylliseksi.
            </Typography>
            <Typography variant='subtitle1'>
              Päättömästä lähestymistavasta poistetaan kaikki tarpeettomat asiat, lähinnä käyttöliittymät, jotka voivat hidastaa verkkosivustosi toimintaa.
            </Typography>
            <Typography variant='subtitle1'>
              Headless WordPress -sovellukseen jää vain sisältötietokanta ja API-puhelut, jolloin WordPress-sivustosi latautuu valon nopeudella, ¬¬ jopa jos julkaiset sisällön staattisella sivustolla.
            </Typography>
          </Grid>
        </Grid>

        {/* #Parempi skaalautuvuus */}

        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>
              #Parempi skaalautuvuus
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Monet yritykset käyttävät staattista WordPress-lähestymistapaa vain skaalautuvuuden vuoksi.
            </Typography>
            <Typography variant='subtitle1'>
              Koska luotat sovellusliittymäpuheluihin sisällön toimittamiseksi, voit skaalata kaiken nopeasti ilman, että käyttäjilläsi on merkittäviä seisokkeja.
            </Typography>
            <Typography variant='subtitle1'>
              Sisältötietokannasi voi kasvaa edelleen, ja koska olet nyt API-ensisijainen, voit integroitua helposti mihin tahansa muuhun tekniikkaan vastaamaan uusia yritystarpeitasi.
            </Typography>
          </Grid>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <DynamicFeedIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>
        </Grid>


        {/* # Tiukempi turvallisuus */}
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <HttpsIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>

          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>
              # Tiukempi turvallisuus
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Päättömät WordPress on erittäin turvallinen lähestymistapa!
            </Typography>
            <Typography variant='subtitle1'>
              Itse asiassa mikään WordPress-tietoturvatoimenpide tai laajennus ei voi pitää sivustosi yhtä turvallisena kuin Headless-lähestymistapa.
            </Typography>
            <Typography variant='subtitle1'>
              Erottamalla käyttöliittymä taustasta, et jätä hakkereille mitään hyväksikäyttöön tai murtautumiseen, koska sisältösi elää erillään käyttöliittymästä.
            </Typography>
          </Grid>
        </Grid>


        {/* #Greater Control */}
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>

          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>

            <Typography variant='h4'>
              #Parempaa hallintaa
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Headless WordPress antaa sinulle täyden hallinnan sisällön visualisoinnista riippumatta siitä, oletko käyttöliittymän kehittäjä tai sisällönjulkaisija.
            </Typography>
            <Typography variant='subtitle1'>
              Kun kustantajat saavat melkein loputtoman hallinnan siitä, kuinka he esittävät sisältöään käyttäjille, käyttöliittymien kehittämisen asiantuntijat voivat hyödyntää erilaisia tekniikoita tarjotakseen käyttäjille teeman ulkopuolella olevan kokemuksen.
            </Typography>
          </Grid>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <DeveloperModeIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>

        </Grid>

        {/* #Future-Proof Tech Stack */}
        <Grid container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}>

          <Grid item container
            justify='center'
            alignItems='center'
            md>
            <CloudDoneIcon
              style={{ fontSize: 320, color: '#a5c0ad' }}
            />
          </Grid>

          <Grid item md
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              marginRight: matchesSM ? 0 : '5em',
              maxWidth: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined
            }}>

            <Typography variant='h4'>
              # Tulevaisuuden todistava tekninen pino
              </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Koska sovellusliittymäpohjainen Headless WordPress voi integroitua useimpiin alustoihin, sinun ei tarvitse huolehtia siitä, että tietty tekniikka vanhenee tai vanhenee.
            </Typography>
            <Typography variant='subtitle1'>
              Voit helposti päivittää uusimpaan tekniikkaan käyttäjien tarpeiden perusteella varmistaaksesi, että tekninen pino on tulevaisuudenkestävä niin kauan kuin mahdollista.
            </Typography>
            <Typography variant='subtitle1'>
              Lisäksi, koska Static WordPress on API-ensisijainen, se voi tukea suosittuja huipputeknologioita ja laitteita, kuten AR, VR ja IoT, mikä antaa sinulle merkittävän etulyöntiaseman kilpailijoihisi nähden.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
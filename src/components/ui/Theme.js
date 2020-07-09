import { createMuiTheme } from '@material-ui/core/styles'

const white = '#FFFFFF'

const grey1 = '#dae1e2'
const grey2 = '#f3f3f3'
const grey3 = '#6c8084'
const grey4 = '#607D8B'
const grey5 = '#274549'

// Greens
const green5 = '#313c2e'

// Blues 
const aqua3dark = '#62acb5'
const aqua3light = '#ade4ea'


// Misc.. 
const sea_foam = '#a5c0ad'
const violet = '#1F1641'

/* Palette generated by Material Palette - materialpalette.com/blue-grey/blue-grey */

// .dark - primary - color    { background: #455A64; }
// .default -primary - color { background: #607D8B; }
// .light - primary - color   { background: #CFD8DC; }
// .text - primary - color    { color: #FFFFFF; }
// .accent - color          { background: #607D8B; }
// .primary - text - color    { color: #212121; }
// .secondary - text - color  { color: #757575; }
// .divider - color         { border - color: #BDBDBD; }



export default createMuiTheme({
  palette: {
    common: {
      white: `${white}`,
      grey1: `${grey1}`,
      grey2: `${grey2}`,
      grey3: `${grey3}`,
      grey4: `${grey4}`,
      grey5: `${grey5}`,
      violet: `${violet}`,
      sea_foam: `${sea_foam}`,
      green5: `${green5}`,
      aqua3dark: `${aqua3dark}`

    },
    primary: {
      main: `${grey2}`
    },
    secondary: {
      main: `${grey2}`,
    },


  },
  typography: {
    tab: {
      fontFamily: 'Proza Libre',
      textTransform: 'none',
      fontWeight: '600',
      fontSize: '1.2rem',
    },
    estimate: {
      fontSize: '1.3rem',
      textTransform: 'none',
      textDecoration: 'none',
      fontFamily: 'Proza Libre',
      color: 'white',
      backgroundColor: grey4
    },
    h1: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.8rem',
      color: grey5,
      lineHeight: 1.6,
    },
    h2: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.8rem',
      color: grey4,
      lineHeight: 1.4,
    },
    h3: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.7rem',
      color: violet,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.6rem',
      color: grey5,
      lineHeight: 1.3
    },
    h5: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.4rem',
      color: grey5,
      lineHeight: 1.3
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Proza Libre',
      color: grey5,
    },
    subtitle1: {
      fontFamily: 'Open Sans',
      color: grey5,
      fontWeight: 500,
      fontSize: '1.2rem',
      lineHeight: 1.2
    },
    subtitle2: {
      fontFamily: 'Open Sans',
      color: grey5,
      fontSize: '1rem',
      fontWeight: 400
    },
    body1: {
      fontSize: '1.2rem',
      fontFamily: 'Open Sans',
      color: grey3,
      fontWeight: '300'
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 400,
      color: violet,
    },
    learnButton: {
      borderColor: grey4,
      borderWidth: 2,
      textTransform: 'none',
      textDecoration: 'none',
      textDecorationStyle: 'none',
      borderRadius: 50,
      fontFamily: 'Proza Libre',
      fontWeight: '600',
      color: grey4,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: violet,
        fontSize: '1rem'
      }
    },
    MuiInput: {
      root: {
        color: grey4,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${violet}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${violet}`
        }
      }
    }
  }
})
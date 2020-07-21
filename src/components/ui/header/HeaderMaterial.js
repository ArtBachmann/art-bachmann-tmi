import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Navbar from './Navbar'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysterises: true,
    treshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}))

// const HeaderMaterial = (props) => {
//   const classes = useStyles()
//   const {
//     menu: {
//       edges: [{ node: menu }],
//     },
//   } = useStaticQuery(graphql`
//     query HeaderQuery {
//      menu: allWordpressMenusMenusItems(
//         filter: { wordpress_id: { eq: 2 } }
//       ) {
//     totalCount
//     edges {
//       node {
//         items {
//           title
//           url
//           child_items {
//             title
//             url
//           }
//         }
//         name
//       }
//     }
//   }
//     }
//   `);

return (
  <>
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Typography variant='h2'
            style={{ margin: '0.6em', color: '#607D8B' }}
          >
            Headless Wordpress
            </Typography>
          <Navbar menu={menu} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
  </>
)


export default HeaderMaterial

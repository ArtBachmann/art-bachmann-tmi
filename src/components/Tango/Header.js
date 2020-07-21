import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Navigation from './Navigation';
import OverlayMenu from './OverlayMenu';
import Hamburger from './Hamburger';


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

const Header = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const classes = useStyles()
  const {
    // site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: allWordpressMenusMenusItems(
        filter: { wordpress_id: { eq: 2 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              child_items {
                title
                url
              }
            }
            name
          }
        }
      }
    }
  `);

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Link to="/">
              <Typography variant='h2'
                style={{ margin: '0.6em', color: '#607D8B' }}
              >
                Headless Wordpress
             </Typography>
            </Link>
            <Navigation menu={menu} />
            <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;



// import React from "react"
// import { graphql, Link, useStaticQuery } from "gatsby"

// import "@wordpress/block-library/build-style/style.css"

// const Layout = ({ children }) => {
//   const menu = useStaticQuery(graphql`
//     query {
//       wpgraphql {
//         menus {
//           nodes {
//             menuItems {
//               nodes {
//                 url
//                 label
//               }
//             }
//           }
//         }
//         generalSettings {
//           url
//         }
//       }
//     }
//   `)

//   const url = menu.wpgraphql.generalSettings.url
//   // TODO don't do this
//   const menuItems = menu.wpgraphql.menus.nodes[0].menuItems.nodes.map(item => ({
//     label: item.label,
//     url: item.url.replace(url, ""),
//   }))

//   return (
//     <>
//       <header>
//         <Link to="/">My Jamstack WordPress Site</Link>
//         {menuItems
//           .filter(item => item.url !== "/")
//           .map(item => (
//             <>
//               {" "}
//               <Link to={item.url}>{item.label}</Link>
//             </>
//           ))}
//       </header>
//       <main>{children}</main>
//     </>
//   )
// }

// export default Layout

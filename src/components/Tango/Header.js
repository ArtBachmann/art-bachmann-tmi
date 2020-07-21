import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Navigation from './Navigation';

import tangoLogo from './tango_logo.svg';
import { HeaderWrapper } from './HeaderStyles';

const Header = () => {
  const {
    site,
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
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={tangoLogo} alt={site.siteMetadata.title} />
            </Link>
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
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

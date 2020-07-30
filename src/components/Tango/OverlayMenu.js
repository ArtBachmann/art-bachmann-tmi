// import React from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';
// import CloseButton from './tango_close_button.svg';

// import { Overlay } from './OverlayMenuStyles';

// const OverlayMenu = ({ menuOpen, callback }) => {
//   const {
//     menu: {
//       edges: [{ node: menu }],
//     },
//   } = useStaticQuery(
//     graphql`
//       query HeaderQuery {    
//       menu: wpMenu(slug: { eq: "primary" }) { 
//         menuItems {
//           nodes {
//             label
//             url
//               }
//             name
//           }
//         }
//       }    
//     `
//   );

//   return (
//     <Overlay menuOpen={menuOpen}>
//       <div className="inner">
//         <ul className="overlayMenu">
//           {menu.items.map((item, i) => (
//             <li key={i}>
//               <Link to={item.url} activeClassName="overlayActive">
//                 {item.title}
//               </Link>
//               {item.child_items ? (
//                 <>
//                   <span>&#8964;</span>
//                   <ul>
//                     {item.child_items.map((child, iChild) => (
//                       <li key={iChild}>
//                         <Link to={child.url} activeClassName="active">
//                           {child.title}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               ) : null}
//             </li>
//           ))}
//         </ul>
//         <div
//           className="closeButton"
//           onClick={callback}
//           role="button"
//           tabIndex="0"
//           onKeyDown={callback}
//         >
//           <img src={CloseButton} alt="wordpress-close-button" />
//         </div>
//       </div>
//     </Overlay>
//   );
// };

// export default OverlayMenu;
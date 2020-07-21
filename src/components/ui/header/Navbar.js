import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'
import { FaAlignRight } from "react-icons/fa"
import { NavigationWrapper } from './NavigationStyles';


const Header = ({ menu }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <button type="button" className={styles.logoBtn} onClick={toggleNav}>
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>
          <NavigationWrapper>
            <ul
              className={
                isOpen
                  ? `${styles.navLinks} ${styles.showNav}`
                  : `${styles.navLinks}`
              }
            >
              {menu.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.url} activeClassName="nav-active">
                    {item.title}
                  </Link>
                  {item.child_items ? (
                    <>
                      <span>&#8964;</span>
                      <ul>
                        {item.child_items.map((child, iChild) => (
                          <li key={iChild}>
                            <Link to={child.url} activeClassName="nav-active">
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </NavigationWrapper>
        </div>
      </nav>
    </>
  )
}

export default Header

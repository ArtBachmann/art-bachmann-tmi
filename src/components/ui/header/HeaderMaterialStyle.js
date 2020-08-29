import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../../../css/navbar.module.css'
import links from '../../../constants/links'
import { FaAlignRight } from "react-icons/fa"



const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link fade to={item.path}>
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header

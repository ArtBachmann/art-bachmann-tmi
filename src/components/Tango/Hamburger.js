import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerButton } from './HamburgerStyles';
import { FaAlignRight } from "react-icons/fa"
import styles from './navbar.module.css'

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton>
    <button type="button" className={styles.logoBtn} onClick={handleOverlayMenu}>
      <FaAlignRight className={styles.logoIcon} />
    </button>
  </HamburgerButton>

);

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
};

export default Hamburger;

import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerButton } from './HamburgerStyles';
import HamburgerHeart from './tango_heart_hamburger.svg';

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
    <img src={HamburgerHeart} alt="tango-hamburger" />
  </HamburgerButton>
);

Hamburger.propTypes = {
  handleOverlayMenu: PropTypes.func,
};

export default Hamburger;

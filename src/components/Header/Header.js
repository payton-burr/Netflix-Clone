import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background } from './styles/style';

function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <React.Fragment {...restProps}>{children}</React.Fragment>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};

export default Header;

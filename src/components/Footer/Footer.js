import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles/style';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;

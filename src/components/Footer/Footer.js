import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from './styles/style';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.Row.propTypes = {
  children: PropTypes.node,
};

export default Footer;

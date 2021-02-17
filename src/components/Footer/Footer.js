import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Column } from './styles/style';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.Row.propTypes = {
  children: PropTypes.node,
};

Footer.Column.propTypes = {
  children: PropTypes.node,
};

export default Footer;

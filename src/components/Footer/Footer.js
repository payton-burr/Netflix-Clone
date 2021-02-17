import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Column, Link } from './styles/style';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
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

Footer.Link.propTypes = {
  children: PropTypes.node,
};

export default Footer;

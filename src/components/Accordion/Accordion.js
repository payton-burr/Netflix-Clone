import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Inner, Title, Header } from './styles/style';

function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordianHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Accordion.propTypes = {
  children: PropTypes.node,
};

Accordion.Title.propTypes = {
  children: PropTypes.node,
};

Accordion.Header.propTypes = {
  children: PropTypes.node,
};

export default Accordion;

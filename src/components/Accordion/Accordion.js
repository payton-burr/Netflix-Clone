import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Inner, Title } from './styles/style';

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

Accordion.propTypes = {
  children: PropTypes.node,
};

Accordion.Title.propTypes = {
  children: PropTypes.node,
};

export default Accordion;

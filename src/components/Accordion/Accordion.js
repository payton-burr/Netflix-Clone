import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
};

export default Accordion;

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles/style';

function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.propTypes = {
  children: PropTypes.node,
};

export default Feature;

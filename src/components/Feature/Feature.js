import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles/style';

function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.propTypes = {
  children: PropTypes.node,
};

Feature.Title.propTypes = {
  children: PropTypes.string,
};

export default Feature;

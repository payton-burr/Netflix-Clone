import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, SubTitle } from './styles/style';

function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.propTypes = {
  children: PropTypes.node,
};

Feature.Title.propTypes = {
  children: PropTypes.string,
};

Feature.SubTitle.propTypes = {
  children: PropTypes.string,
};

export default Feature;

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles/style';

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.propTypes = {
  children: PropTypes.node,
};

export default Profiles;

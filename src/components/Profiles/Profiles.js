import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles/style';

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.propTypes = {
  children: PropTypes.node,
};

Profiles.Title.propTypes = {
  children: PropTypes.string,
};

export default Profiles;

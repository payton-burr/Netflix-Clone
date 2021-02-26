import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, List, User } from './styles/style';

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profiles.propTypes = {
  children: PropTypes.node,
};

Profiles.Title.propTypes = {
  children: PropTypes.string,
};

Profiles.List.propTypes = {
  children: PropTypes.node,
};

Profiles.User.propTypes = {
  children: PropTypes.node,
};

export default Profiles;

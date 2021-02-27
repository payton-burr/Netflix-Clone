/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Group,
  Text,
  Link,
} from './styles/style';

function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <React.Fragment {...restProps}>{children}</React.Fragment>
  );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};

Header.Container.propTypes = {
  children: PropTypes.node,
};

Header.Group.propTypes = {
  children: PropTypes.node,
};

Header.Logo.propTypes = {
  to: PropTypes.string,
};

Header.Text.propTypes = {
  children: PropTypes.string,
};

Header.Link.propTypes = {
  children: PropTypes.string,
};

Header.ButtonLink.propTypes = {
  children: PropTypes.string,
};

export default Header;

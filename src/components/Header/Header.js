import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/style';

function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <React.Fragment {...restProps}>{children}</React.Fragment>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.bool,
};

Header.Container.propTypes = {
  children: PropTypes.node,
};

Header.Frame.propTypes = {
  children: PropTypes.node,
};

Header.Group.propTypes = {
  children: PropTypes.node,
};

Header.Logo.propTypes = {
  to: PropTypes.string,
};

Header.TextLink.propTypes = {
  children: PropTypes.string,
};

Header.ButtonLink.propTypes = {
  children: PropTypes.string,
};

export default Header;

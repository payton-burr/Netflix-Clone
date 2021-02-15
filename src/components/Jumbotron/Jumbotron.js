import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Inner, Title } from './styles/style';

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.propTypes = {
  children: PropTypes.element,
  direction: PropTypes.string,
};

Jumbotron.Container.propTypes = {
  children: PropTypes.node,
};

Jumbotron.Title.propTypes = {
  children: PropTypes.node,
};

export default Jumbotron;

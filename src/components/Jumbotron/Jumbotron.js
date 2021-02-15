import React from 'react';
import PropTypes from 'prop-types';

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

Jumbotron.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};

Jumbotron.Container.propTypes = {
  children: PropTypes.node,
};

export default Jumbotron;

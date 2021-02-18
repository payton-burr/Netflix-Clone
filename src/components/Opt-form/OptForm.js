import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button, Text } from './styles/style';

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.propTypes = {
  children: PropTypes.node,
};

OptForm.Button.propTypes = {
  children: PropTypes.element,
};

OptForm.Text.propTypes = {
  children: PropTypes.string,
};

export default OptForm;

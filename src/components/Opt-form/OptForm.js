import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './styles/style';

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

OptForm.propTypes = {
  children: PropTypes.node,
};

OptForm.Button.propTypes = {
  children: PropTypes.string,
};

export default OptForm;

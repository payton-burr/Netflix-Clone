import React from 'react';
import PropTypes from 'prop-types';

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  <Button {...restProps}>{children}</Button>;
};

OptForm.propTypes = {
  children: PropTypes.node,
};

export default OptForm;

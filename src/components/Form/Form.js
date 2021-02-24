import React from 'react';

function Form(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

export default Form;

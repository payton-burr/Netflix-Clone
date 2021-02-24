import React from 'react';
import { Container, Title } from './styles/style';

function Form(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle(children, ...restProps) {
  return <Title {...restProps}>{children}</Title>;
};

export default Form;

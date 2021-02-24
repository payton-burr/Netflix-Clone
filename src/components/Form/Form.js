import React from 'react';
import { Container, Title, Text, Input, Error } from './styles/style';

function Form(children, ...restProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle(children, ...restProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText(children, ...restProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Input = function FormInput(children, ...restProps) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Error = function FormError(children, ...restProps) {
  return <Error {...restProps}>{children}</Error>;
};

export default Form;
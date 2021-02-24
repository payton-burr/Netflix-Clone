/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Input,
  Error,
  Link,
  Submit,
} from './styles/style';

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.propTypes = {
  children: PropTypes.node,
};

Form.Base.propTypes = {
  children: PropTypes.node,
};

Form.Title.propTypes = {
  children: PropTypes.string,
};

Form.Text.propTypes = {
  children: PropTypes.string,
};

Form.TextSmall.propTypes = {
  children: PropTypes.string,
};

Form.Link.propTypes = {
  children: PropTypes.element,
};

Form.Input.propTypes = {
  children: PropTypes.element,
};

Form.Submit.propTypes = {
  children: PropTypes.element,
};

Form.Error.propTypes = {
  children: PropTypes.element,
};

export default Form;

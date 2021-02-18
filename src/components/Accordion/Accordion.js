import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Inner, Item, Title, Header, Body } from './styles/style';

const ToggleContext = createContext();
function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps}>{children}</Body>;
};

Accordion.propTypes = {
  children: PropTypes.node,
};

Accordion.Item.propTypes = {
  children: PropTypes.node,
};

Accordion.Title.propTypes = {
  children: PropTypes.node,
};

Accordion.Header.propTypes = {
  children: PropTypes.node,
};

Accordion.Body.propTypes = {
  children: PropTypes.node,
};

export default Accordion;

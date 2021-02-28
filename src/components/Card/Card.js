import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Jumbotron/styles/style';

const FeatureContext = createContext();

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  return (
    <FeatureContext.Provider value={{}}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

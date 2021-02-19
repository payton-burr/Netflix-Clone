import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo />
      </Header.Container>

      {children}
    </Header>
  );
}

HeaderContainer.propTypes = {
  children: PropTypes.node,
};

export default HeaderContainer;

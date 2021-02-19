import React from 'react';
import { Header } from '../components';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo />
      </Header.Container>
    </Header>
  );
}

export default HeaderContainer;

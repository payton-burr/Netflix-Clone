import React from 'react';
import PropTypes from 'prop-types';
import * as ROUTES from '../constants/routes';
import { Header } from '../components';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} />
      </Header.Container>

      {children}
    </Header>
  );
}

HeaderContainer.propTypes = {
  children: PropTypes.node,
};

export default HeaderContainer;

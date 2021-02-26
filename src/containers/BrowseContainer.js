import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { SelectProfileContainer } from './SelectProfileContainer';
import { FooterContainer } from './FooterContainer';

function BrowseContainer() {
  const profile = {
    displayName: 'Payton',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <div>Browse Container</div>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer />
  );
}

export default BrowseContainer;

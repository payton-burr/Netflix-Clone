import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { SelectProfileContainer } from './SelectProfileContainer';
import { FooterContainer } from './FooterContainer';

function BrowseContainer() {
  return (
    <>
      <div>Browse Container</div>
      <FooterContainer />
    </>
  );
}

export default BrowseContainer;

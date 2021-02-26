import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { SelectProfileContainer } from './SelectProfileContainer';
import { FooterContainer } from './FooterContainer';

function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: 'Payton',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <div>Browse Container</div>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;

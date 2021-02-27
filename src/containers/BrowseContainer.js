/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Header } from '../components';
import FirebaseContext from '../context/firebase';
import { SelectProfileContainer } from './SelectProfileContainer';
import { FooterContainer } from './FooterContainer';
import * as ROUTES from '../constants/routes';

function BrowseContainer() {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'Payton',
    photoURL: '1',
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;

/* eslint-disable prettier/prettier */
import React from 'react';
import { OptForm } from '../components';
import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/HeaderContainer';

function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;

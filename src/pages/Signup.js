/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { Form } from '../components';
import FooterContainer from '../containers/FooterContainer';
import * as ROUTES from '../constants/routes';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              type="email"
              placeholder="Email"
              autocomplete="off"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type="password"
              placeholder="Password"
              autocomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;

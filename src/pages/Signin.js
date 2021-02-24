import React, { useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { Form } from '../components';

function Signin() {
  const [error, setError] = useState('');
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
      </Form>
    </HeaderContainer>
  );
}

export default Signin;

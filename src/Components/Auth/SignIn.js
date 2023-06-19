import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/actions';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSignIn() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Card.Body className="d-flex flex-column px-5" style={{ minHeight: '320px' }}>
      <div className="d-grid gap-3">
        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="d-flex flex-grow-1 align-items-end justify-content-end">
        <Button onClick={() => handleSignIn()}>Sign in</Button>
      </div>
    </Card.Body>
  );
}

export default SignIn;

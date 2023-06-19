import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/actions';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  function handleSignUp() {
    dispatch(signUpRequest(email, name, password));
  }

  return (
    <Card.Body className="d-flex flex-column px-5" style={{ minHeight: '320px' }}>
      <div className="d-grid gap-3">
        <div>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="d-flex flex-grow-1 align-items-end justify-content-end mt-3">
        <Button onClick={() => handleSignUp()}>Sign up</Button>
      </div>
    </Card.Body>
  );
}

export default SignUp;

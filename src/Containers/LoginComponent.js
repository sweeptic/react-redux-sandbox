import React, { useState } from 'react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};

export default LoginComponent;

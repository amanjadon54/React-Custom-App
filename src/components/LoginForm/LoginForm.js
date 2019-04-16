import React from 'react';

import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

import css from './LoginForm.css';

const LoginForm = () => {
  return (
    <div>
      <header className={css.header}>Welcome, Sign In !!!</header>

      <form className={css.form}>
        <FormGroup
          label="User Id"
          labelFor="user"
          inline
          className={css.user}
          contentClassName={css.content}
        >
          <InputGroup id="user" placeholder="Enter User Id" round />
        </FormGroup>

        <FormGroup label="Password" labelFor="pass" inline className={css.pass}>
          <InputGroup id="password" placeholder="Enter Password" round type="Password" />
        </FormGroup>
      </form>

      <Button text="Sign In" intent="PRIMARY" className={css.footer} icon="log-in" />
    </div>
  );
};

export default LoginForm;

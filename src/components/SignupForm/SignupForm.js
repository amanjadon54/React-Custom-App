import React from 'react';

import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

import css from './SignupForm.css';

const SignupForm = () => {
  return (
    <div>
      <header className={css.header}>Join Us, Sign Up !!!</header>

      <form className={css.form}>
        <FormGroup label="First Name" labelFor="firstName" inline className={css.firstname}>
          <InputGroup
            id="firstName"
            placeholder="Enter First Name"
            round
            className={css.inputFirstname}
          />
        </FormGroup>

        <FormGroup label="Last Name" labelFor="lastName" inline className={css.lastname}>
          <InputGroup
            id="lastName"
            placeholder="Enter Last Name"
            round
            className={css.inputLastname}
          />
        </FormGroup>

        <FormGroup label="Email Id" labelFor="email" inline className={css.email}>
          <InputGroup id="email" placeholder="Enter Email Id" round className={css.inputMail} />
        </FormGroup>
      </form>

      <Button text="Sign up" intent="PRIMARY" className={css.footer} icon="follower" />
    </div>
  );
};

export default SignupForm;

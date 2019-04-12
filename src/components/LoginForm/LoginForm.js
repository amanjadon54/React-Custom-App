import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';

const LoginForm = () => {
  return (
    <FormGroup
      disabled={false}
      helperText={false}
      inline={false}
      label="Login"
      // labelFor="text-input"
      labelInfo="(required)"
    >
      <InputGroup id="userId" placeholder="Enter User Id" disabled={false} />
      <InputGroup id="password" placeholder="Enter Password" disabled={false} />
    </FormGroup>
  );
};

export default LoginForm;

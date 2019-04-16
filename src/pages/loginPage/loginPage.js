import React from 'react';

import LoginForm from 'components/LoginForm';

import SignupForm from 'components/SignupForm';

import classNames from 'classnames';

import { Classes } from '@blueprintjs/core';

import css from './loginPage.css';

/* eslint-disable*/

const loginPage = () => {
  const cssRightPanel = classNames(Classes.DARK, css.form);

  return (
    <div className={css.root}>
      <div className={css.leftPanel}>
        <img src={require("./images.jpeg")} alt="" id="logo" />

        <p className={css.gmt}>G M T</p>
      </div>

      <div className={cssRightPanel}>
        <div className={css.login}>
          <LoginForm />
        </div>

        <div className={css.signup}>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default loginPage;

import React from 'react';
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import css from './Header.css';

const Header = (props) => {
  const { pageTitle } = props;
  return (
    <Navbar className={css.header}>
      <NavbarGroup>
        <NavbarHeading>{pageTitle} - GMT</NavbarHeading>
        <NavbarDivider />
        <Button icon="home" text="Home" onClick={() => (window.location.hash = '/dashboard')} />
      </NavbarGroup>
      <NavbarGroup className={css.logOut}>
        <Button icon="log-out" text="Log Out" onClick={() => (window.location.hash = '/')} />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import css from './Header.css';

const Header = () => {
  return (
    <Navbar className={css.header}>
      <NavbarGroup>
        <NavbarHeading>Dashboard - GMT</NavbarHeading>
        <NavbarDivider />
        <Button icon="home" text="Home" />
        <Button icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;

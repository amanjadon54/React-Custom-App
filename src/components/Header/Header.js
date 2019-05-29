import React from 'react';
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Alignment
} from '@blueprintjs/core';
import css from './Header.css';

const Header = (props) => {
  const { PageTitle } = props;
  return (
    <Navbar className={css.header}>
      <NavbarGroup>
        <NavbarHeading>{PageTitle} - GMT</NavbarHeading>
        <NavbarDivider />
        <Button
          icon="home"
          text="Home"
          onClick={() => (window.location.hash = '/dashboard')}
          className={css.btn}
          minimal
        />
      </NavbarGroup>
      <NavbarGroup alignt={Alignment.RIGHT} className={css.logOut}>
        <Button
          icon="log-out"
          text="Log Out"
          className={css.btn}
          onClick={() => (window.location.hash = '/')}
          minimal
        />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;

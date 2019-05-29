import React from 'react';
import classNames from 'classnames';
import Header from 'components/Header';
import css from './Layout.css';

const Layout = (props) => {
  const { className, children, PageTitle } = props;
  //   const pages = [
  //     { id: 'dashboard', title: 'Dashboard', href: '/dashboard' },
  //     { id: 'nursery ', title: 'Nursery Details', href: '/details' }
  //   ];
  console.log(PageTitle);
  return (
    <div className={classNames(css.root, className)}>
      <Header title="GMT" PageTitle={PageTitle} />
      <div className={css.body}>{children}</div>
    </div>
  );
};

export default Layout;

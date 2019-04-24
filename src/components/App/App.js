import React from 'react';
import LoginPage from 'pages/loginPage';
import dashboardPage from 'pages/dashboardPage';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={dashboardPage} />
      </Switch>
    </HashRouter>
  );
};

export default hot(App);

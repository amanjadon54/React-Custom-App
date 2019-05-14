import React from 'react';
import LoginPage from 'pages/loginPage';
import dashboardPage from 'pages/dashboardPage';
import nurseryDetailspage from 'pages/nurseryDetailspage';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={dashboardPage} />
        <Route path="/details" component={nurseryDetailspage} />
      </Switch>
    </HashRouter>
  );
};

export default hot(App);

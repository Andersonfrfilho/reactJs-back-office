import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Panel from './Drawer';
import UserList from '../pages/UserList';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/Login" />} />
      <Route path="/Login" component={Login} />
      <Route path="/Drawer" component={Panel} />
    </Switch>
  );
}

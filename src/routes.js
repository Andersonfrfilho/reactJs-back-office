import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Panel from './pages/Panel';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Panel} />
      <Route path="/Login" exact component={Login} />
    </Switch>
  );
}

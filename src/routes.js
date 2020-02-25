import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Panel from './pages/Panel';
import Teste from './pages/Teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Panel} />
      <Route path="/Login" exact component={Login} />
    </Switch>
  );
}

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Login from '../pages/Login';
import Panel from './Drawer';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/Drawe" />} />
      {/* <Route path="/" exact component={Login} /> */}
      <Route path="/Drawer" component={Panel} />
    </Switch>
  );
}

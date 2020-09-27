import React from 'react';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';

function Routes() {
  return (
    <Router>
      {/* <Dashboard /> */}
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route
          exact
          path="/admin/:name"
          render={({ match }) => <Dashboard name={match.params.name} />}
        />
      </Switch>
    </Router>
  );
}

export default Routes;

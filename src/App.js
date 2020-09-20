import React from 'react';
import Dashboard from './component/Dashboard';
import { Route, Switch} from "react-router-dom";
import LoginForm from './pages/LoginForm/LoginForm';

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/admin/:name" render={ ({match}) => <Dashboard name={match.params.name}/> } />
      </Switch>
    </div>
  )
}

export default App

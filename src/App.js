import React from 'react';
import Dashboard from './component/Dashboard';
import { Route, Switch} from "react-router-dom";
import classList from './pages/classList/ClassList';

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <Switch>
        <Route exact path="/" />
        <Route exact path="/admin/:name" render={ ({match}) => <Dashboard name={match.params.name}/> } />
      </Switch>
    </div>
  )
}

export default App

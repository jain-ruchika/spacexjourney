import React from 'react';
import './App.css';
import CustomAppBar from './components/AppBar';
import History from './components/History';
import history from './history';
import Payloads from './components/Payloads';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <CustomAppBar />
        <Switch>
          <Route path="/" exact component={History}></Route>
          <Route path="/payloads" exact component={Payloads}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

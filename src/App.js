import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { Counter } from './Counter';
import Photograph from './Photograph';
import API from './API';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact path="/api/:name/" component={API} />
    <Route exact path="/counter/" component={Counter} />
    <Route path="/photograph/:id/" component={Photograph} />
  </Switch>
);

export default App;
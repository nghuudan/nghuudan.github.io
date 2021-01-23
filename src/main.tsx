import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </Switch>
  </HashRouter>
);

render(<App />, document.getElementById('app'));

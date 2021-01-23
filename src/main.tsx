import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <h1>Hello</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));

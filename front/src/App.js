import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history'
import GlobalStyled from './styles/global';

import List from './pages/List';

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={List} />
        </Switch>
        <GlobalStyled />
      </Router>
    </>
  );
}

export default App;

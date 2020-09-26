import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history'
import GlobalStyled from './styles/global';

import Header from './components/Header';
import Home from './pages/Home';
import Pet from './pages/Pet';

function App() {
  return (
    <>
      <Router history={history}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet" component={Pet} />
        </Switch>
        <GlobalStyled />
      </Router>
    </>
  );
}

export default App;

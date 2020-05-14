import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Joke from './components/Joke';
import Counter from './components/Counter.js';

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/joke" component={Joke} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;

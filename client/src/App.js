import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import ProceedCards from './components/Proceed-Cards/proceed-cards';
import Auth from './components/Auth/auth';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProceedCards} />
        <Route path="/auth/:authentication" exact component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;

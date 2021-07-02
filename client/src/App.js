import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import ProceedCards from './components/Proceed-Cards/proceed-cards';
import Auth from './components/Auth/auth';
import ProceedCard from './components/Proceed-Card/card';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const instanceArr = ["Customer", "Provider"]

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

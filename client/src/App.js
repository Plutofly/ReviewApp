import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import ProceedCard from './components/Proceed-Card/card';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const instanceArr = ["Customer", "Provider"]

  return (
    <Container>
      <Grow in>
        <Container>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={10}>
                {instanceArr.map((instance) => (
                  <Grid key={instance} item className={classes.cardGroup}>
                    <ProceedCard instance={instance}/>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

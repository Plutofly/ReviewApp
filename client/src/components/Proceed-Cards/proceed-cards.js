import ProceedCard from '../Proceed-Card/card';
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import useStyles from './styles';


const ProceedCards = () => {
    // const [currentId, setCurrentId] = useState(0);
    // const dispatch = useDispatch();
    const classes = useStyles();
  
    // useEffect(() => {
    //   dispatch(getPosts());
    // }, [currentId, dispatch]);
  
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
}

export default ProceedCards;
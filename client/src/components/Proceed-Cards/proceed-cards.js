import ProceedCard from '../Proceed-Card/card';
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';


const ProceedCards = () => {
    const classes = useStyles();
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
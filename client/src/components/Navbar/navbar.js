import { Appbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return (
        <Appbar classname={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Lorem Ipsum</Typography>
            <img className={classes.image} src={''} alt="icon" height="60"/>
        </Appbar>
    )
}

export default Navbar;

// Navbar will probably be used later, so for the mmomnet leave it like it is
// Posts prob need to be deleted but idk\
// also dont forgot to delete this comment ..XD
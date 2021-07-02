import React, { useState } from 'react';
import useStyles from './styles';
import { Container, Avatar, Button, Paper, Grid, Typography } from '@material-ui/core'
import {useParams} from 'react-router'

import Input from './input'
import { useLocation } from 'react-router';
const Auth = (props) => {
    const { authentication } = useParams()
    console.log('Auth: ')
    console.log(authentication)
    // const location = useLocation()
    console.log(props)
    // const { isSignUp } = _ ? props.location.state.id
    const isSignUp = authentication === 'signUp'
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false)
    const handleChange = () => {}
    const handleSubmit = () => {}
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {/* Add Confirm Password later on Signup only*/}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
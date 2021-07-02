import React, { useState } from 'react';
import useStyles from './styles';
import { Container, Avatar, Button, Paper, Grid, Typography, Link, Box } from '@material-ui/core'
import {useParams} from 'react-router'

import Input from './input'
const Auth = (props) => {
    const { authentication } = useParams()
    const isSignUp = authentication === 'signUp'
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false)
    const handleChange = () => {}
    const handleSubmit = () => {}
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const goToTermsAndServices = () => {}
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h4" className={classes.mainHeader}>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                {isSignUp ? (<Box color="text.primary" component="span" m={2} textAlign="center">By continuing you aggre to Reviews <Link href="#" onClick={goToTermsAndServices} variant="body2">{'Terms of Service & Privacy Policy'}</Link>.</Box>) : (<></>) }
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {/* Add Confirm Password later on Signup only*/}
                    </Grid>
                    <Button style={{
                        background: '#f43939'
                    }} type="submit" fullWidth color="primary" variant="contained" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
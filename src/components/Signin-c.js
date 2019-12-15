import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, Redirect } from 'react-router-dom'

import firebase from '../firebase'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});
  

class SignIn extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '', 
            auth: false
        }
        this.setUser = props.handler
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault()
        firebase.firestore().collection('users')
        .where('email', '==', this.state.email)
        .get()
        .then(query => {
            query.forEach(doc => {
                if (doc.data().password === this.state.password){
                    this.setUser(doc.data().email, doc.data().type)
                    this.setState({
                        auth: true
                    })
                }
            })
        })

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if (this.state.auth){
            return <Redirect to='/swe363-project-react' />
        }
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                    <form className={classes.form} noValidate
                        onSubmit={this.handleSubmit}
                    >
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            
                    >
                        Sign In
          </Button>
                    <Grid container>
                            <Grid item xs>
                            <RouterLink to='/swe363-project-react/reset-password' style={{color: 'inherit', fontFamily: 'inherit', textDecoration: 'inherit'}}>
                                <Link href="#" variant="body2">
                                     Forgot password?
                                </Link>
                            </RouterLink>
                        </Grid>
                        <Grid item>
                            <RouterLink to='/swe363-project-react/signup' style={{color: 'inherit', fontFamily: 'inherit', textDecoration: 'inherit'}}>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </RouterLink>

                        </Grid>
                    </Grid>
                </form>
            </div>
            
        </Container>
        )
    }
}



export default withStyles(styles, {withTheme: true})(SignIn)
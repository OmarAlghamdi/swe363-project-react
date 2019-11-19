import React, { Component } from 'react'
import { Typography, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, Container, CssBaseline, Button } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
    },
});

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'Omar',
            lastName: 'Alghamdi',
            email: 'omar@kfupm.com',
            password: 'omar123',
            showPassword: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    handleMouseDownPassword(e) {
        e.preventDefault()
    }
    render() {
        const { classes } = this.props
        return (
            <dvi>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h4'
                            style={{ margin: 'auto' }}
                        >
                            Profile
                </Typography>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                            <OutlinedInput
                                name='firstName'
                                type='text'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                            <OutlinedInput
                                name='lastName'
                                type='text'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                name='email'
                                type='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name='password'
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            style={{ width: '100%', marginBottom: '8px' }}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save Changes
          </Button>
                        <Link to='/' style={{
                            fontFamily: 'inherit', textDecoration: 'inherit',
                            width: '100%'
                        }}>
                            <Button
                                type="cancel"
                                style={{ width: '100%' }}
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Discard Changes
                          </Button>
                        </Link>
                    </div>
                </Container>
            </dvi>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Profile)
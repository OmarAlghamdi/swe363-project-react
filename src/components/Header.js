import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor() {
        super()
        this.linkStyle = {
            color: 'inherit',
            textDecoration: 'inherit',
            fontFamily: 'inherit'
        }
    }

    getControl(signedUser) {
        if (signedUser === '') {
            return (
                <Fragment>
                    <Link style={this.linkStyle} to='/signin'>
                        <Button color='inherit'>Sign in</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/signup'>
                        <Button color='inherit'>Sign up</Button>
                    </Link>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <Link style={this.linkStyle} to='/profile'>
                        <Button color='inherit'>Profile</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/'>
                        <Button color='inherit'>Sign out</Button>
                    </Link>
                </Fragment>
            )
        }
    }

    render() {

        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link style={this.linkStyle} to='/'>
                        <Typography>KFUPM Events</Typography>
                    </Link>
                    <Grid container justify='flex-end'>
                        {this.getControl('')}
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header
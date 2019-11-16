import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {

    const linkStyle = {
        color: 'inherit',
        textDecoration: 'inherit',
        fontFamily: 'inherit'
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <Link style={linkStyle} to='/'>
                    <Typography>KFUPM Events</Typography>
                </Link>
                <Grid container justify='flex-end'>
                    <Link style={linkStyle} to='/signin'>
                    <Button color='inherit'>Sign in</Button>
                    </Link>
                    <Link style={linkStyle} to='/signup'>
                    <Button color='inherit'>Sign up</Button>
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    )
} 

export default Header
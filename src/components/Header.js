import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

import firebase from '../firebase'

class Header extends Component {
    constructor(props) {
        super(props)
        this.linkStyle = {
            color: 'inherit',
            textDecoration: 'inherit',
            fontFamily: 'inherit'
        }
        this.signed = this.props.signed
        this.state = {
            signed: false,
            admin: false
        }
        this.registerRealtimeAuthListener()
        this.handleSignout = this.handleSignout.bind(this)
    }

    registerRealtimeAuthListener(){
        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            
            if (user){
                this.setState({
                    signed: true
                })
            } else {
                this.setState({
                    signed: false,
                    admin: false
                })
            }

            firebase.firestore().collection('users')
            .where('email', '==', user.email)
            .get()
            .then(query => {
                query.forEach(doc => {
                    if (doc.data().type === 'admin'){
                        console.log('ADMIN')
                        this.setState({
                            admin: true
                        })
                    }
                })
            })
        })
    }

    handleSignout(e){
        e.preventDefault()  
        firebase.auth().signOut()
    }

    getControl() {
        if (!this.state.signed) {
            return (
                <Fragment>
                    <Link style={this.linkStyle} to='/swe363-project-react/signin'>
                        <Button color='inherit'>Sign in</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/signup'>
                        <Button color='inherit'>Sign up</Button>
                    </Link>
                </Fragment>
            )
        }
        else if (this.state.signed && !this.state.admin){
            return (
                <Fragment>
                    <Link style={this.linkStyle} to='/swe363-project-react/new-event'>
                        <Button color='inherit'>New Event</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/profile'>
                        <Button color='inherit'>Profile</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/history'>
                        <Button color='inherit'>History</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/'>
                        <Button color='inherit'
                            onClick={this.handleSignout}
                            >Sign out</Button>
                    </Link>
                </Fragment>
            )
        }
        else if (this.state.signed && this.state.admin){
            return (
                <Fragment>
                    <Link style={this.linkStyle} to='/swe363-project-react/events'>
                        <Button color='inherit'>Events</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/users'>
                        <Button color='inherit'>Users</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/reports'>
                        <Button color='inherit'>Reprots</Button>
                    </Link>
                    <Link style={this.linkStyle} to='/swe363-project-react/'>
                        <Button color='inherit'
                            onClick={this.handleSignout}
                            >Sign out</Button>
                    </Link>
                </Fragment>
            )
        }
    }

    render() {
        return (
            
            <AppBar position='static'>
                <Toolbar>
                    <Link style={this.linkStyle} to='/swe363-project-react/'>
                        <Typography>KFUPM Events</Typography>
                    </Link>
                    <Grid container justify='flex-end'>
                        {this.getControl()}
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Header)
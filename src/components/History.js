import React, { Component } from 'react'
import Search from './Search'
import Event from './Event'
import { Grid, Typography } from '@material-ui/core'

import firebase from '../firebase'

class History extends Component{
    constructor(props) {
        super(props)
        this.events = props.events
        this.user = props.user
        this.admin = props.admin
        this.state = {
            user: ''
        }
        this.registerRealtimeAuthListener()
    }

    registerRealtimeAuthListener(){
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.setState({
                    user: user.email
                })
            } else {
                this.setState({
                    user: ''
                })
            }
        })
    }
    
    getStatus() {
        return 'waiting'
    }
    render() {
        return (
            <div>
                <Search />
                
                <Grid container spacing={1}>
                    <Grid item style={{
                        marginTop: '8px',
                        marginLeft: '8px'
                    }}>
                        <Typography component='h1' variant='h4'>
                            {this.admin? 'Events' : 'You Created'}
                        </Typography>
                    </Grid>
                    <Grid container spacing={1}>
                    {this.events.filter(event => (
                    event.creator === this.user || this.admin
                )).map(event => (
                        <Grid item xs={12} md={6} lg={3} key={event.id}>
                            <Event source='history'
                                name={event.name}
                                desc={event.desc}
                            owner='true'
                            startDate={event.startDate}
                            startTime={event.startTime}
                            data={event}
                            />
                        </Grid>
                ))}
                        </Grid>
                </Grid>

                {
                    this.admin? '' : <Grid container spacing={1}>
                    <Grid item style={{
                        marginTop: '8px',
                        marginLeft: '8px'
                    }}>
                        <Typography component='h1' variant='h4'>
                            You Signed Up For 
                        </Typography>
                        </Grid>
                        <Grid container spacing={1}>
                    {this.events.filter(event => (
                    event.creator === this.state.user
                )).map(event => (
                        <Grid item xs={12} md={6} lg={3}>
                            <Event source='history'
                                name={event.name}
                                desc={event.desc}
                            status={this.getStatus()}
                            startDate={event.startDate}
                            startTime={event.startTime}
                            data={event}
                            />
                        </Grid>
                ))}
                            </Grid>
                </Grid>   
                }
                
            </div>
        )
    }
}

export default History
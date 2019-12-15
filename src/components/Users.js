import React, { Component } from 'react'
import User from './User'
import { Grid } from '@material-ui/core'

import firebase from '../firebase'

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: [],

        }
        this.getUsers()
    }
    getUsers(){
        firebase.firestore().collection('users')
        .onSnapshot(snapshot => {
            const allUsers = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            this.setState({
                users: allUsers
            })
        })
    }
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    {this.state.users.map(user => (
                        <Grid item xs={12} md={6} lg={3} key={user.id}>
                            <User  data={user} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default Users
import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core'

import firebase from '../firebase'

class User extends Component {
    constructor(props) {
        super()
        this.state = {
            ...props.data
        }
        console.log(this.state)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleAccept(){
        firebase.firestore().collection('users').doc(this.state.id)
        .update({
            state: 'accepted'
        })
        this.setState({
            state: 'accepted'
        })
    }
    handleDelete(){
        firebase.firestore().collection('users').doc(this.state.id)
        .delete()
    }
    
    getControl(state) {
        if (state === 'waiting') {
            return (
                <Fragment>
                    <Button size='small' color='primary'
                        onClick={this.handleAccept}>
                        Accept
                </Button>
                    <Button size='small' color='secondary'
                        onClick={this.handleDelete}>
                        Reject
                </Button>
                </Fragment>
            )
        }
        else if (state === 'accepted') {
            return (
                <Fragment>
                    <Button size='small' color='secondary'>
                        Block
                </Button>
                    <Button size='small' color='secondary'
                        onClick={this.handleDelete}>
                        Delete
                </Button>
                </Fragment>
            )

        }
    }
    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6">
                            {`${this.state.firstName} ${this.state.lastName}`}
              </Typography>
                        <Typography variant="h6" color="textSecondary" component="h6">
                            {this.state.email}
              </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.getControl(this.state.state)}
                </CardActions>
            </Card>
        )
    }
}

export default User
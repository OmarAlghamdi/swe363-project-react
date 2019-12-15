import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import football from '../assets/football.jfif'

import firebase from '../firebase'

class Event extends Component {
    constructor(props) {
        super()
        this.source = props.source
        this.status = props.status
        this.name = props.name
        this.desc = props.desc
        this.owner = props.owner
        this.startDate = props.startDate
        this.startTime = props.startTime
        this.data = props.data
        console.log(this.data)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleJoin = this.handleJoin.bind(this)
        this.state = {
            user: '', 
            needAuth: false, 
            joinable: true
        }
        this.registerRealtimeAuthListener()
        console.log(this.state.user)
        console.log('event id')
        console.log(this.data.id)
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

    handleDelete(e){
        e.preventDefault()  
        firebase.firestore().collection('events').doc(this.data.id)
        .delete()
    }
    handleJoin(e){
        e.preventDefault()  
        if (this.state.user === ''){
            console.log(this.state.user)
            this.setState({
                needAuth: true
            })
        } else {
            firebase.firestore().collection('events').doc(this.data.id)
            .update({
                joined: firebase.firestore.FieldValue.arrayUnion(this.state.user)
            })
            this.setState({
                joinable: false
            })
        }
        
    }

    getControl(source, owner) {

        if (source === 'home') {
            if (this.state.joinable){
                return (
                    <Button size="small" color="primary"
                        onClick={this.handleJoin}>
                        Join
                    </Button>
                )
            } else {
                return (
                    <Button size="small" color="primary"
                        onClick={this.handleJoin}
                        disabled>
                        joined
                    </Button>
                )
            }
            
        }
        else if (source === 'history' && owner !== 'true') {
            return (
                <Fragment>
                    <Button size="small" color="primary"
                        onClick={this.handleDelete}>
                        Cancel
                    </Button>
                    <Link to={`/swe363-project-react/feedback/?id=${this.data.id}`} style={{fontFamily: 'inherit', textDecoration: 'inherit'}}>
                    <Button size="small" color="primary">
                        Send Feedback
                    </Button>
                    </Link>
                </Fragment>
            )
        }
        else if (source === 'history' && owner === 'true') {
            return (
                <Fragment>
                    {/* <Link to='/swe363-project-react/accept' style={{fontFamily: 'inherit', textDecoration: 'inherit'}}>
                        <Button size="small" color="primary">
                            Accept/Reject
                        </Button>
                    </Link> */}
                    <Link to={`/swe363-project-react/edit-event/?id=${this.data.id}`} params={{id: this.data.id}} style={{fontFamily: 'inherit', textDecoration: 'inherit'}}>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    </Link>
                    <Button size="small" color="secondary"
                        onClick={this.handleDelete}>
                        Delete
                    </Button>
                </Fragment>
            )
        }
    }
    getStatus(source, owner) {
        if (source === 'history' && owner !== 'true') {
            return (
                <Typography
                    variant="overline" color="secondary" component="p"
                    style={{ marginLeft: '16px' }}
                >
                    Status: {this.status}
                </Typography>
            )
        }
    }
    render() {
        if (this.state.needAuth){
            return <Redirect to='/swe363-project-react/signin' />
        }

        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={football}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.name}
              </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.desc}
                        </Typography>
                        <Typography variant="body2"  component="h6">
                            {`Starts on ${this.startDate} at ${this.startTime}`}
              </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.getControl(this.source, this.owner)}
                </CardActions>
                {this.getStatus(this.source, this.owner)}
            </Card>
        )
    }
}


export default Event
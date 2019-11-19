import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core'

class Accept extends Component {
    constructor(props) {
        super(props)
        this.waiting = props.event[0].waiting
        this.joined = props.event[0].joined
        this.users = props.users

        // console.log('event')
        // console.log(props.event)
        console.log('waiting')
        console.log(this.waiting)
        // console.log('joined')
        // console.log(this.joined)
        // console.log('users')
        // console.log(this.users)

    }
    render() {
        console.log(
            this.users.filter(user => (
                this.waiting.includes(user.email)
            ))
        )
        
        return (
            <div>

                <Grid constainer spacing={1}>
                    <Grid item style={{
                        marginTop: '8px',
                        marginLeft: '8px'
                    }}>
                        <Typography component='h1' variant='h4'>
                            Waiting
                        </Typography>  
                        {
                            this.users.filter(user => (
                                this.waiting.includes(user.email)
                            )).map(user => (
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {`${user.firstName} ${user.lastName}`}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Accept
                                        </Button>
                                        <Button size="small" color="secondary">
                                            Reject
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid constainer spacing={1}>
                    <Grid item style={{
                        marginTop: '8px',
                        marginLeft: '8px'
                    }}>
                        <Typography component='h1' variant='h4'>
                            Accepted
                        </Typography>
                        {
                            this.users.filter(user => (
                                this.joined.includes(user.email)
                            )).map(user => (
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {`${user.firstName} ${user.lastName}`}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Accept
import React, { Component } from 'react'
import { Grid, Typography, Card, CardActionArea, CardContent, CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Feedbacks extends Component {
    constructor(props) {
        super(props)
        this.feedbacks = props.events.map(event => event.feedbacks)
        this.users = props.users
    }
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item={{
                        marginTop: '8px',
                        marginLeft: '8px'
                    }} xs={12}>
                        <Typography component='h1' variant='h4'>
                            Feedbacks
                        </Typography>
                        {
                            this.feedbacks.map(feedback => feedback.map(feed => (
                                (
                                
                                    <Card>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {`By: ${
                                                        this.users.filter(user => user.email === feed.by)
                                                        .map(user => user.firstName)
                                                    }`}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {
                                                        feed.content
                                                    }
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link to='reply' style={{
                                                fontFamily: 'inherit',
                                                textDecoration: 'inherit'
                                            }}
                                            >
                                                <Button color='primary'>
                                                  Reply
                                                </Button>
                                            </Link>
                                            
                                        </CardActions>
                                    
                                    </Card>
                                )
                            ))
                
                                
                            )
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Feedbacks
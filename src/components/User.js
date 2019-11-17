import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography, Button } from '@material-ui/core'

class User extends Component {
    constructor(props) {
        super()
        this.activated = props.activated
    }
    getControl(activated) {
        if (activated === 'false') {
            return (
                <Fragment>
                    <Button size='small' color='primary'>
                        Accept
                </Button>
                    <Button size='small' color='secondary'>
                        Reject
                </Button>
                </Fragment>
            )
        }
        else if (activated === 'true') {
            return (
                <Fragment>
                    <Button size='small' color='secondary'>
                        Block
                </Button>
                    <Button size='small' color='secondary'>
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
                            User Name
              </Typography>
                        <Typography variant="h6" color="textSecondary" component="h6">
                            User Email
              </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.getControl(this.activated)}
                </CardActions>
            </Card>
        )
    }
}

export default User
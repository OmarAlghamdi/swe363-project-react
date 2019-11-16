import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import football from '../assets/football.jfif'

class Event extends Component {
    constructor(props) {
        super()
        this.source = props.source
        this.status = props.status

    }
    getControl(source) {
        if (source === 'home') {
            return (
                <Button size="small" color="primary">
                    Join
                </Button>
            )
        }
        else if (source === 'history') {
            return (
                <Fragment>
                    <Button size="small" color="primary">
                        Cancel
                    </Button>
                    <Button size="small" color="primary">
                        Send Feedback
                    </Button>
                </Fragment>
            )
        }
    }
    getStatus(source) {
        if (source === 'history') {
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
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={football}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            event name
              </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            event description
              </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.getControl(this.source)}
                </CardActions>
                {this.getStatus(this.source)}
            </Card>
        )
    }
}


export default Event
import React, { Component, Fragment } from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import football from '../assets/football.jfif'

class Event extends Component {
    constructor(props) {
        super()
        this.source = props.source
        this.status = props.status
        this.name = props.name
        this.desc = props.desc
        this.owner = props.owner

    }
    getControl(source, owner) {

        if (source === 'home') {
            return (
                <Button size="small" color="primary">
                    Join
                </Button>
            )
        }
        else if (source === 'history' && owner !== 'true') {
            return (
                <Fragment>
                    <Button size="small" color="primary">
                        Cancel
                    </Button>
                    <Link to='/feedback' style={{fontFamily: 'inherit', textDecoration: 'inherit'}}>
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
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    <Link to='/feedback' style={{fontFamily: 'inherit', textDecoration: 'inherit'}}>
                    <Button size="small" color="secondary">
                        Delete
                    </Button>
                    </Link>
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
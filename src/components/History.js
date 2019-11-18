import React, { Component } from 'react'
import Search from './Search'
import Event from './Event'
import { Grid } from '@material-ui/core'

class History extends Component{
    constructor(props) {
        super(props)
        this.events = props.events
    }
    getStatus() {
        return 'waiting'
    }
    render() {
        return (
            <div>
                <Search />
                <Grid container spacing={1}>
                {this.events.map(event => (
                        <Grid item xs={12} md={6} lg={3}>
                            <Event source='history'
                                name={event.name}
                                desc={event.desc}
                                status={this.getStatus}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default History
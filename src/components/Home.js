import React, { Component } from 'react'
import Search from './Search'
import Event from './Event'
import { Grid } from '@material-ui/core'

class Home extends Component {
    constructor(props) {
        super(props)
        this.events = props.events
    }
    render() {
        return (
            <div>
                <Search />
                <Grid container spacing={1}>
                {this.events.map(event => (
                        <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'
                            name={event.name}
                            desc={event.desc}
                            startDate={event.startDate}
                            startTime={event.startTime}
                            data={event}
                        />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default Home
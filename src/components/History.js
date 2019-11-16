import React, { Component } from 'react'
import Search from './Search'
import Event from './Event'
import { Grid } from '@material-ui/core'

class History extends Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Search />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='history' status='waiting'/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default History
import React, { Component } from 'react'
import Search from './Search'
import Event from './Event'
import { Grid } from '@material-ui/core'

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Search />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Event source='home'/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home
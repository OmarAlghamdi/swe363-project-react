import React, { Component } from 'react'
import User from './User'
import { Grid } from '@material-ui/core'

class Users extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='false' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='false' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='true' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='true' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='true' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <User activated='true' />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Users
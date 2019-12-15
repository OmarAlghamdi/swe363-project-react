import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { Link, Redirect, withRouter } from 'react-router-dom'

import firebase from '../firebase'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        width: '100%'
    },
});

class NewEvent extends Component{
    constructor(props) {
        super(props)
        this.mode = props.mode
        this.user = props.user
        this.state = {
            name: '',
            desc: '',
            startDate: new Date(),
            endtDate: new Date(), 
            updated: false
        }
        this.id = props.location.search.substring(4)
        console.log(this.id)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.date2date = this.date2date.bind(this)
        this.date2time = this.date2time.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        
        firebase.firestore().collection('events')
        .add({
            name: this.state.name,
            desc: this.state.desc,
            startDate: this.date2date(this.state.startDate),
            endDate: this.date2date(this.state.endDate),
            startTime: this.date2time(this.state.startDate), 
            endTime: this.date2time(this.state.endDate),
            creator: this.user
        })
        this.setState({
            updated: true
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleStartDateChange(newDate) {
        this.setState({
            startDate: newDate
        })
    }
    handleEndDateChange(newDate) {
        this.setState({
            endDate: newDate
        })
    }
    date2date(date){
        const year = date.getFullYear()
        const month = date.getMonth()+1
        const day = date.getDate()
        return `${year}-${month}-${day}`
    }
    date2time(date){
        const hour = date.getHours()
        const minute = date.getMinutes()
        return `${hour}-${minute}-00`
    }
    handleSave(e){
        e.preventDefault()
        
        firebase.firestore().collection('events').doc(this.id)
        .update({
            name: this.state.name,
            desc: this.state.desc,
            startDate: this.date2date(this.state.startDate),
            endDate: this.date2date(this.state.endDate),
            startTime: this.date2time(this.state.startDate), 
            endTime: this.date2time(this.state.endDate)
        })
        this.setState({
            updated: true
        })
    }
    
    getMode() {
        if (this.mode === 'edit') {
            return 'Edit Event'
        }
        else {
            return 'New Event'
        }
    }
    componentDidMount() {
        if (this.mode === 'edit') {
            firebase.firestore().collection('events').doc(this.id)
            .get()
            .then(doc =>{
                this.setState({
                    name: doc.data().name,
                    desc: doc.data().desc
                })
            })
            
        }
    }
    getControl(classes) {
        if (this.mode === 'edit') {
            return (
                <Fragment>
                    <Grid item xs={12} sm={6}>
                    {/* <Link to='/swe363-project-react/history' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}> */}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.handleSave}
                            >
                                Save
                            </Button>
                            {/* </Link> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link to='/swe363-project-react/history' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}>
                            <Button
                                type="cancel"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Discard Changes
                            </Button>
                        </Link>
                        </Grid>
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link to='/swe363-project-react/' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}>
                            <Button
                                type="cancel"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Cancel
                            </Button>
                        </Link>
                        </Grid>
                </Fragment>
            )
        }
    }
    render() {
        if (this.state.updated){
            return <Redirect to='/swe363-project-react/events' />
        }

        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    {this.getMode()}
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Event Name"
                        name="name"
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="desc"
                        label="Event Description"
                        name="desc"
                            multiline
                            value={this.state.desc}
                            onChange={this.handleChange}
                    />
                    <Grid container>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="start-date"
                                label="Starting Date"
                                format="dd/MM/yyyy"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="start-time"
                                label="Starting Time"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                fullWidth
                            />
                            <KeyboardDatePicker
                                margin="normal"
                                id="end-date"
                                label="Ending Date"
                                format="dd/MM/yyyy"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="end-time"
                                label="Ending Time"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                fullWidth
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>



                    <Grid container spacing={2}>
                        {this.getControl(classes)}
                    </Grid>

                </form>
            </div>

        </Container>
        )
    }

}

export default withStyles(styles, {withTheme: true})(withRouter(NewEvent))
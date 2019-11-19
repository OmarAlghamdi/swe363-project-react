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
import { Link } from 'react-router-dom'

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
        this.state = {
            name: '',
            desc: '',
            date: new Date()
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDateChange(newDate) {
        this.setState({
            date: newDate
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
            this.setState({
                name: 'football',
                desc: 'footbal in field 5'
            })
        }
    }
    getControl(classes) {
        if (this.mode === 'edit') {
            return (
                <Fragment>
                    <Grid item xs={12} sm={6}>
                    <Link to='/history' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Save
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link to='/history' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}>
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
                            >
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link to='/' style={{ color: 'inherit', textDecoration: 'none', width: '40%' }}>
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
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="start-time"
                                label="Starting Time"
                                value={this.state.date}
                                onChange={this.handleDateChange}
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
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="end-time"
                                label="Ending Time"
                                value={this.state.date}
                                onChange={this.handleDateChange}
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

export default withStyles(styles, {withTheme: true})(NewEvent)
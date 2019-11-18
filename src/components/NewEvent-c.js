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
            date: new Date()
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    hadnleChange(d) {
        this.setState({
            date: d
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
                    />
                    <Grid container>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="start-date"
                                label="Starting Date"
                                format="dd/MM/yyyy"
                                value={this.state.date}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
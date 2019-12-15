import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, withRouter, Redirect } from 'react-router-dom'

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
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Feedback extends Component{
    constructor(props) {
        super(props)
        this.mode = props.mode
        this.state = {
            user: '',
            content: '', 
            submitted: false
        }
        this.id = props.location.search.substring(4)
        console.log(this.id)
        this.registerRealtimeAuthListener()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    registerRealtimeAuthListener(){
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.setState({
                    user: user.email
                })
            } else {
                this.setState({
                    user: ''
                })
            }
        })
    }
    handleChange(e){
        e.preventDefault()
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        firebase.firestore().collection('feedbacks')
        .add({
            by: this.state.user,
            content: this.state.content
        })
        .then(ref => {
            firebase.firestore().collection('events').doc(this.id)
            .update({
                feedbacks: firebase.firestore.FieldValue.arrayUnion(ref._key.path.segments[1])
            })
        })
        this.setState({
            submitted: true
        })
    }

    getMode() {
        if (this.mode === 'reply') {
            return 'Reply'
        }
        else {
            return 'Feedback'
        }
    }
    getHint() {
        if (this.mode === 'reply') {
            return 'Your Reply'
        }
        else {
            return 'Your Feedback'
        }
    }
    render() {
        if (this.state.submitted){
            return <Redirect to='swe363-project-react/history' />
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
                        id="feedback"
                        label={this.getHint()}
                        name="feedback"
                        autoFocus
                        multiline
                        rows='10'
                        onChange={this.handleChange}
                    />


                    <Grid container>

                        <Button
                            type="submit"
                            style={{ width: '40%', marginRight: 'auto' }}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                            Submit
          </Button>
                            <Link to={
                                this.mode? 'feedbacks' : 'history'
                            }
                                style={{
                            fontFamily: 'inherit', textDecoration: 'inherit',
                            width: '40%'
                        }}>
                            <Button
                            type="cancel"
                            style={{ width: '100%' }}
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            >
                                Cancel
                          </Button>
                        </Link>
                        
                    </Grid>
                </form>
            </div>

        </Container>
            
        )
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Feedback))
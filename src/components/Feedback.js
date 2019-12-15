import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
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
}));

export default function withRouter(Feedback()) {
    const classes = useStyles();
    const id = props.location.search.substring(4)
    console.log(this.id)

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Feedback
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="feedback"
                        label="Your Feedback"
                        name="feedback"
                        autoFocus
                        multiline
                        rows='10'
                    />


                    <Grid container>

                        <Button
                            type="submit"
                            style={{ width: '40%', marginRight: 'auto' }}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
          </Button>
                        <Link to='/swe363-project-react/history' style={{
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
    );
}
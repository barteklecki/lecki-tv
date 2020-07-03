import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ErrorMessage = ({show = false, click, message}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(show);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        click();
        setOpen(false);
    };

    console.log('message:', message);

    return (
        <div className={classes.root}>
            <Snackbar open={open} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ErrorMessage;

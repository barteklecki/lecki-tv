import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorMessage = ({ classes, show = false, click, message }) => {
    const [open, setOpen] = useState(show);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        click();
        setOpen(false);
    };

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

export default withStyles(styles)(ErrorMessage);

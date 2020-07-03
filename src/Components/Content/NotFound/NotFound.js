import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as NotFoundIcon } from '../../../assets/not-found2.svg';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const NotFound = ({ classes }) => {
    return (
        <Container className={classes.root}>
            <NotFoundIcon className={classes.icon} />
            <br />
            <Typography variant="h6" gutterBottom>
                No results! <br />
            </Typography>
        </Container>
    );
};

export default withStyles(styles)(NotFound);

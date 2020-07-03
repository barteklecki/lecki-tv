import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as NotFoundIcon } from '../../../assets/not-found2.svg';

const style = {
    width: '90%',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '1rem',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    textAlign: 'center',
};

const icon = {
    maxWidth: 350,
};

const NotFound = () => {
    return (
        <Container style={style}>
            <NotFoundIcon style={icon} />
            <br />
            <Typography variant="h6" gutterBottom>
                No results! <br />
            </Typography>
        </Container>
    );
};

export default NotFound;

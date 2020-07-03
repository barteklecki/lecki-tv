import React from 'react';
import { ReactComponent as StartPic } from '../../../assets/Curious-bro.svg'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const icon = {
    maxWidth: '400px',
}

const StartingPage = () => {
    return (
        <Container>
            <br/>
            <StartPic  style={icon} />
            <br/>
            <Typography component="h4" variant="h4" aria-label="header">
                   Find your favourite TV show!
            </Typography>
            <Typography
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    Use search bar above to start...
            </Typography>
            <br/>
        </Container>
    );
}

export default StartingPage;

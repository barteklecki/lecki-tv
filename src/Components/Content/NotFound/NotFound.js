import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
    return (
        <Card>
            <Typography component="h4" variant="h4" aria-label="title">
                No results for phrase _____ ! <br/>
                Try again.
            </Typography>
        </Card>
    );
}

export default NotFound;

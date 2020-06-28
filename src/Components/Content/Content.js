import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      alignSelf: 'flex-start',
    },
}));

const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h3" component="h3" gutterBottom>
                [ CONTENT ]
            </Typography>
        </Container>
    )
}

export default Content;

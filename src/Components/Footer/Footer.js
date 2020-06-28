import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import theme from '../../assets/theme';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        padding: theme.spacing(1, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2">
                    Powered by&nbsp;
                    <Link color="inherit" href="https://www.tvmaze.com/api">
                        TV-Maze API
                    </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Copyright © 2020
                </Typography>
            </Container>
        </footer>
    );
}

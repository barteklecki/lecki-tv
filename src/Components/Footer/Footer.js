import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Footer = ({ classes }) => {
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
                    Copyright © 2020 by&nbsp;
                    <Link color="inherit" href="https://github.com/barteklecki">
                        BarLec
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default withStyles(styles)(Footer);

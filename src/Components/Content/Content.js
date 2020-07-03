import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import StartingPage from './StartingPage/StartingPage';

import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

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
        <Container component="main" className={classes.main}>
            <Switch>
                <Route path="/search" component={MovieList} />
                <Route path="/info/:id" component={MovieDetails} />
                <Route path="/info" component={MovieDetails} />
                <Route path="/start" component={StartingPage} />
                <Redirect to="/start" />
            </Switch> 
        </Container>
    );
};

export default Content;

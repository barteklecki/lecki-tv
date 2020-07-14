import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { displayError } from '../../../store/actions';

import SelectDay from './SelectDay/SelectDay';
import MovieListHead from './MovieListHead/MovieListHead';
import Movie from './Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ListPlaceholder from './ListPlaceholder/ListPlaceholder';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const filterByDay = (arr, day) => {
    if (day) {
        return arr.filter(el => el.show.schedule.days.find(d => d === day));
    }
    return arr;
};

const MovieList = ({ classes }) => {
    const movieList = useSelector(state => state.movieList);
    const isListFetching = useSelector(state => state.isListFetching);
    const dayFilter = useSelector(state => state.dayFilter);
    const errorMessage = useSelector(state => state.errorMessage);
    const dispatch = useDispatch();
    const history = useHistory();

    const onErrorClose = () => dispatch(displayError(''));
    const filteredList = filterByDay(movieList, dayFilter);

    const clickItemHandler = id => {
        history.push(`info/${id}`);
    };

    let list = '';

    if (filteredList.length) {
        list =  <TableContainer className={classes.tabContainer}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="table title"
                    >
                        <MovieListHead />
                        <TableBody>
                            {filteredList.map(movie => (
                                <Movie
                                    click={clickItemHandler}
                                    key={movie.show.id}
                                    id={movie.show.id}
                                    score={movie.score}
                                    title={movie.show.name}
                                    genres={movie.show.genres}
                                    premiere={movie.show.premiered}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
    } else if ( isListFetching ) {
        list = <ListPlaceholder repet={10} />
    } else {
        list = <NotFound />;
    }

    return (
        <div className={classes.scrollFix}>
            <SelectDay />
            {list}
            {errorMessage ? (
                <ErrorMessage
                    show={true}
                    click={onErrorClose}
                    message={String(errorMessage)}
                />
            ) : null}
        </div>
    );
};

export default withStyles(styles)(MovieList);

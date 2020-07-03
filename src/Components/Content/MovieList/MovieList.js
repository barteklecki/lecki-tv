import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { filterByDay } from '../../../utils';
import { displayError } from '../../../store/actions';

import SelectDay from './SelectDay/SelectDay';
import MovieListHead from './MovieListHead/MovieListHead';
import Movie from './Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MovieList = ({ classes, movieList, dayFilter, errorMessage, onErrorClose }) => {
    let history = useHistory();

    let filteredList = filterByDay(movieList, dayFilter);

    const clickItemHandler = id => {
        console.log(id);
        history.push(`info/${id}`);
    };

    let list = '';
    if (filteredList.length) {
        list = (
            <>
                <TableContainer className={classes.root}>
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
            </>
        );
    } else {
        list = <NotFound />;
    }

    return (
        <>
            <SelectDay />
            {list}
            {errorMessage ? (
                <ErrorMessage
                    show={true}
                    click={onErrorClose}
                    message={String(errorMessage)}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        dayFilter: state.dayFilter,
        movieList: state.movieList,
        errorMessage: state.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onErrorClose: () => dispatch(displayError('')),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default withStyles(styles)(connector(MovieList));

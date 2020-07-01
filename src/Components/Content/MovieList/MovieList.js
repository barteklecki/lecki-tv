import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import SelectDay from './SelectDay/SelectDay';
import MovieListHead from './MovieListHead/MovieListHead';
import Movie from './Movie/Movie';
import NotFound from '../NotFound/NotFound';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    table: {
        width: 'auto',
        minWidth: '750px',
        margin: 'auto',
    },
}));

const MovieList = (props) => {
    
    let history = useHistory();
    const classes = useStyles();

    const clickItemHandler = (id) => {
        console.log(id);
        history.push(`info/${id}`);
    };

    let list = '';
    if (props.movieList.length) {
        list = (
            <>
                <SelectDay />
                <TableContainer className={classes.root}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="table title"
                    >
                        <MovieListHead />
                        <TableBody>
                            {props.movieList.map((movie) => (
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

    return list;
};

const mapStateToProps = (state) => {
    return {
        movieList: state.movieList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectMovie: (id) =>
            dispatch({
                type: 'SELECT_MOVIE',
                payload: {id: id},
            }),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(MovieList);

import React from 'react';

import SelectDay from './SelectDay/SelectDay';
import MovieListHead from './MovieListHead/MovieListHead';
import Movie from './Movie/Movie';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    table: {
        width: 'auto',
        minWidth: '800px',
        margin: 'auto',
    },
}));

function MovieList() {
    const classes = useStyles();

    return (
        <>
            <SelectDay />
            <TableContainer className={classes.root}>
                <Table className={classes.table} aria-labelledby="tableTitle" aria-label="table title">
                    <MovieListHead />
                    <TableBody>
                        <Movie />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default MovieList;

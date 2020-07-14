import React from 'react';

import MovieListHead from '../MovieListHead/MovieListHead';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Skeleton from '@material-ui/lab/Skeleton';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ListPlaceholder = ({ classes, repet = 5 }) => {

    let dummyTable = []
    for ( let i = 0; i < repet; i++ ) {
        dummyTable.push(i);
    }

    let rows = dummyTable.map( index => {
        let cells = [classes.col1, classes.col2, classes.col3, classes.col4];

        return <TableRow key={index}>
                    { cells.map( ( cellClasses, index ) =>
                        <TableCell key={index}>
                            <Skeleton className={cellClasses} />
                        </TableCell>
                    )}
                </TableRow>
    });

    return  <TableContainer className={classes.root}>
                <Table
                    className={classes.table}
                >
                    <MovieListHead />
                    <TableBody>
                        { rows }
                    </TableBody>
                </Table>
            </TableContainer>

};

export default withStyles(styles)(ListPlaceholder);

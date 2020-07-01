import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        //
    },
}));

function MovieListHead() {
    const classes = useStyles();
    return (
        <TableHead className={classes.root}>
            <TableRow>
                <TableCell align={'left'} padding={'default'} sortDirection={'asc'}>
                    <TableSortLabel
                        active={true}
                        disabled={true}
                        direction="desc"
                    >
                        Score
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'}>
                    <TableSortLabel
                        active={false}
                        disabled={true}
                    >
                        Title
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        active={false}
                        disabled={true}
                    >
                        Genere
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        active={false}
                        disabled={true}
                    >
                        Premiere
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default MovieListHead;

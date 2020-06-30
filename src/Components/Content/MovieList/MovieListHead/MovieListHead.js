import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function MovieListHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        //active={orderBy === headCell.id}
                        direction={'asc'}
                    >
                        Score
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        //active={orderBy === headCell.id}
                        direction={'asc'}
                    >
                        Title
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        //active={orderBy === headCell.id}
                        direction={'asc'}
                    >
                        Genere
                    </TableSortLabel>
                </TableCell>
                <TableCell align={'left'} padding={'default'} sortDirection={false}>
                    <TableSortLabel
                        //active={orderBy === headCell.id}
                        direction={'asc'}
                    >
                        Premiere
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default MovieListHead;

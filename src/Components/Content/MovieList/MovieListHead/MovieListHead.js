import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

const config = [
    {id: 1, name: 'Score'},
    {id: 2, name: 'Title'},
    {id: 3, name: 'Genres'},
    {id: 4, name: 'Premiere'},
];

const MovieListHead = ({classes}) => {
    const printTabHeader = config.map( cell => 
        <TableCell 
            key={cell.id}
            className={`cell${cell.id}`}
        >
                        { cell.name }
        </TableCell>
    );

    return (
        <TableHead>
            <TableRow>
                { printTabHeader }
            </TableRow>
        </TableHead>
    );
}

export default withStyles(styles)(MovieListHead);

import React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const config = [
    {id: 1, name: 'Score'},
    {id: 2, name: 'Title'},
    {id: 3, name: 'Genres'},
    {id: 4, name: 'Premiere'},
];

const printTabHeader = config.map( cell => 
    <TableCell key={cell.id}>
                    { cell.name }
    </TableCell>
);

const MovieListHead = () => {
return (
    <TableHead>
        <TableRow>
            { printTabHeader }
        </TableRow>
    </TableHead>
);
}

export default MovieListHead;

import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
        //
    },
}));

function Movie() {
    const classes = useStyles();

    return (
                    <TableRow className={classes.row} hover tabIndex={-1}>
                        <TableCell component="th" id="" scope="row" padding="none">
                            [SCORE]
                        </TableCell>
                        <TableCell align="left">[TITLE--------------]</TableCell>
                        <TableCell align="left">[GENERE---------------------]</TableCell>
                        <TableCell align="left">[PREMIE---------------------------]</TableCell>
                    </TableRow>
    );
}

export default Movie;
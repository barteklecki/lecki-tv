import React from 'react';

import ListHead from './ListHead/ListHead';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    table: {
        //minWidth: 750,
    },
}));

function List() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-labelledby="tableTitle" aria-label="table title">
                <ListHead />
                <TableBody>
                    <TableRow hover tabIndex={-1}>
                        <TableCell padding="checkbox">[SYM]</TableCell>
                        <TableCell component="th" id="" scope="row" padding="none">
                            [SCORE]
                        </TableCell>
                        <TableCell align="right">[TITLE--------------]</TableCell>
                        <TableCell align="right">[GENERE---------------------]</TableCell>
                        <TableCell align="right">[PREMIE---------------------------]</TableCell>
                        <TableCell align="right">[X]</TableCell>
                    </TableRow>
                    <TableRow hover tabIndex={-1}>
                        <TableCell padding="checkbox">[SYM]</TableCell>
                        <TableCell component="th" id="" scope="row" padding="none">
                            [SCORE]
                        </TableCell>
                        <TableCell align="right">[TITLE]</TableCell>
                        <TableCell align="right">[GENERE]</TableCell>
                        <TableCell align="right">[PREMIERE]</TableCell>
                        <TableCell align="right">[X]</TableCell>
                    </TableRow>
                    <TableRow hover tabIndex={-1}>
                        <TableCell padding="checkbox">[SYM]</TableCell>
                        <TableCell component="th" id="" scope="row" padding="none">
                            [SCORE]
                        </TableCell>
                        <TableCell align="right">[TITLE]</TableCell>
                        <TableCell align="right">[GENERE]</TableCell>
                        <TableCell align="right">[PREMIERE]</TableCell>
                        <TableCell align="right">[X]</TableCell>
                    </TableRow>
                    <TableRow hover tabIndex={-1}>
                        <TableCell padding="checkbox">[SYM]</TableCell>
                        <TableCell component="th" id="" scope="row" padding="none">
                            [SCORE]
                        </TableCell>
                        <TableCell align="right">[TITLE]</TableCell>
                        <TableCell align="right">[GENERE]</TableCell>
                        <TableCell align="right">[PREMIERE]</TableCell>
                        <TableCell align="right">[X]</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default List;

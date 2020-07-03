import React from 'react';
import PropTypes from 'prop-types';
import { roundScore, printArray } from '../../../../utils';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Movie = ({ classes, id, score, title, genres, premiere, click }) => {
    return (
        <TableRow
            component="tr"
            className={classes.row}
            hover
            onClick={() => click(id)}
        >
            <TableCell
                className={classes.scoreCell}
                id=""
                scope="row"
                padding="default"
            >
                <Chip
                    label={roundScore(score, 1)}
                    className={classes.chip}
                    variant="outlined"
                    color="secondary"
                    size="small"
                />
            </TableCell>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="left">{printArray(genres)}</TableCell>
            <TableCell align="left">{premiere}</TableCell>
        </TableRow>
    );
};

Movie.defaultProps = {
    score: 0,
    title: '-',
    genres: '-',
    premiere: '-',
};

Movie.propsType = {
    score: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.array,
    premiere: PropTypes.string,
};

export default withStyles(styles)(Movie);

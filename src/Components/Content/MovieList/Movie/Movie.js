import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
        //
    },
    scoreCell: {
        width: 80,
    },
    chip: {
        width: 60,
        fontWeight: 'bold',
        borderWidth: '2px',
    },
}));

const roundScore = (value, decPlaces) => {
    let score = value * 10 ** decPlaces;
    score = Math.round(score) / 10 ** decPlaces;
    return score;
}

const printArray = (arr) => arr.join(', ');

const Movie = (props) => {
    const classes = useStyles();

    return (
                    <TableRow 
                        className={classes.row} 
                        hover
                        onClick={() => props.click(props.id)}
                    >
                        <TableCell 
                            TableRow 
                            className={classes.scoreCell} 
                            id="" 
                            scope="row" 
                            padding="default"
                        >
                            <Chip 
                                label={roundScore(props.score, 1)} 
                                className={classes.chip} 
                                variant="outlined" 
                                color="secondary" 
                                size="small" 
                            />
                        </TableCell>
                        <TableCell align="left">{props.title}</TableCell>
                        <TableCell align="left">{printArray(props.genres)}</TableCell>
                        <TableCell align="left">{props.premiere}</TableCell>
                    </TableRow>
    );
}

Movie.defaultProps = {
    score: 0,
    title: '-',
    genres: '-',
    premiere: '-',
}

Movie.propsType = {
    score: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.array,
    premiere: PropTypes.string,
}

export default Movie;
import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {findRecordById, roundScore, printArray, roundRating, validateString, validateArray} from '../../../utils';
import ReactHtmlParser from 'react-html-parser';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import {withStyles} from '@material-ui/core/styles';
import styles from './styles';

const MovieDetails = (props) => {

    const {
        classes,
        match: {
            params: { id },
        },
        movieList,
    } = props;

    if(!movieList.length) {
        console.log('Empty data list - redirecting to homepage >>>');
        return <Redirect to="/" />
    }

    const [{
        score,
        show: {
            name = '-',
            genres = ['-'],
            rating,
            schedule,
            runtime = 0,
            premiered = '-',
            status = '-',
            image = '',
            summary = '',
        }
    }] = findRecordById(movieList, id);

    const ratingAverage = validateString(rating, 'average');
    const days = validateArray(schedule, 'days');
    const time = validateString(schedule, 'time');
    const imageMedium = validateString(image, 'medium');
    const imageUrl = imageMedium ? imageMedium : validateString(image, 'original');

    return (
        <Card className={classes.root}>
            <CardContent className={classes.summary}>
                <br />
                <Typography component="h4" variant="h4" aria-label="title">
                   {name}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    aria-label="genere"
                >
                    {printArray(genres)}
                </Typography>
                <div className={classes.rating}>
                    <Chip label={roundScore(score, 1)} color="secondary" size="small" />
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Rating
                        readOnly
                        name="half-rating-read"
                        value={roundRating(ratingAverage)}
                        precision={0.5}
                        aria-label="rating"
                    />
                </div>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    {printArray(days)} {time} {runtime ? `(${runtime}min)` : null}
                </Typography>
                <br />
                <Divider variant="middle" />
                <br />
                <Typography variant="subtitle1" color="textSecondary">
                    premiere:<strong> {premiered}</strong>
                    <br />
                    status:<strong> {status}</strong>
                    <br />
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={imageUrl}
                title={name}
            />
            <CardContent className={classes.content}>
                <Typography variant="body1" color="textSecondary">
                    {ReactHtmlParser(summary)}
                </Typography>
            </CardContent>
        </Card>
    );
};

function mapStateToProps(state) {
    return { movieList: state.movieList, };
}

export default withStyles(styles)(connect(mapStateToProps)(MovieDetails));

import React from 'react';
import {connect} from 'react-redux';
import {findRecordById, roundScore, printArray, roundRating} from '../../../assets/utils';
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

    const [{
        score,
        show: {
            name,
            genres,
            rating: { average: rating},
            schedule: {
                days,
                time
            },
            runtime,
            premiered,
            network: {
                name: network,
                country: { name: country },
            },
            status,
            image: { medium: image },
            summary,
        }
    }] = findRecordById(movieList, id);

    console.log(findRecordById(movieList, id));
    console.log(days, time);

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
                        value={roundRating(rating)}
                        precision={0.5}
                        aria-label="rating"
                    />
                </div>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    {printArray(days)} {time} ({runtime}min)
                </Typography>
                <br />
                <Divider variant="middle" />
                <br />
                <Typography variant="subtitle1" color="textSecondary">
                    premiere:<strong> {premiered}</strong>
                    <br />
                    network:<strong> {network}</strong>
                    <br />
                    country:<strong> {country}</strong>
                    <br />
                    status:<strong> {status}</strong>
                    <br />
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={image}
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

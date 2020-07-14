import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { roundScore, printArray, roundRating } from '../../../utils';
import ReactHtmlParser from 'react-html-parser';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const findRecordById = (arr, id) => arr.filter(el => el.show.id === +id);

const MovieDetails = ({ classes, match }) => {
    const movieList = useSelector(state => state.movieList);

    if (!movieList.length) {
        return <Redirect to="/" />;
    }
    
    // show:
    //     externals: {tvrage: null, thetvdb: 72097, imdb: "tt0050025"}
    //     genres: Array(3)
    //         0: "Action"
    //         1: "Adventure"
    //         2: "Western"
    //         length: 3
    //         __proto__: Array(0)
    //     id: 3360
    //     image:
    //         medium: "http://static.tvmaze.com/uploads/images/medium_portrait/17/44293.jpg"
    //         original: "http://static.tvmaze.com/uploads/images/original_untouched/17/44293.jpg"
    //         __proto__: Object
    //     language: "English"
    //     name: "Have Gun, Will Travel"
    //     network:
    //         country: {name: "United States", code: "US", timezone: "America/New_York"}
    //         id: 2
    //         name: "CBS"
    //         __proto__: Object
    //     officialSite: null
    //     premiered: "1957-09-14"
    //     rating: {average: null}
    //     runtime: 30
    //     schedule:
    //         days: ["Saturday"]
    //         time: "21:30"
    //         __proto__: Object
    //     status: "Ended"
    //     summary: "<p>The man known only as "Paladin" lives in San Francisco at the Carlton Hotel, accustomed to the fanciest food and furnishings. He afford it all by riding out as a gunslinger and charging top dollar for his services. His calling card? "Have Gun Will Travel." Paladin will take on any case if a client meets his fee, but whether he helps them or not depends on whether he thinks that they deserve it. A West Point graduate with an unknown past, Paladin is as likely to help a client with his lightning wits and sense of strategy, as he is to use his gun and his hold-out derringer.</p>"
    //     type: "Scripted"
    //     updated: 1580147281
    //     url: "http://www.tvmaze.com/shows/3360/have-gun-will-travel"
    //     webChannel: null
    //     weight: 63

    const { params: { id } } = match;

    const [
        {
            score,
            show: {
                name,
                genres,
                rating,
                schedule,
                runtime,
                premiered,
                status,
                image,
                network,
                summary,
            },
        },
    ] = findRecordById(movieList, id);

    const ratingAverage = rating?.average ?? ''; //ES2020
    const days = schedule?.days ?? '';
    const time = schedule?.time ?? '';
    const imageUrl = image?.medium ?? image?.original ?? '';
    const networkName = network?.name ?? '';
    const networkCountry = network?.country?.name ?? '';

    return (
        <Card className={classes.root}>
            <CardContent className={classes.summary}>
                <Typography
                    className={classes.text}
                    component="h4"
                    variant="h4"
                    aria-label="title"
                >
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
                    <Chip
                        label={roundScore(score, 1)}
                        color="secondary"
                        size="small"
                    />
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
                    className={classes.text}
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    {printArray(days)} {time}{' '}
                    {runtime ? `(${runtime}min)` : null}
                </Typography>
                <Divider className={classes.text} variant="middle" />
                <Typography
                    className={classes.text}
                    variant="subtitle1"
                    color="textSecondary"
                >
                    { premiered ? (<p>premiere: <strong>{ premiered }</strong></p>) : null }
                    { networkName ? (<p>network: <strong>{ networkName }</strong></p>) : null }
                    { networkCountry ? (<p>country: <strong>{ networkCountry }</strong></p>) : null }
                    { status ? (<p>status: <strong>{ status }</strong></p>) : null }
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={imageUrl}
                title={name}
            />
            <CardContent className={classes.content}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    component="div"
                >
                    {ReactHtmlParser(summary)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(MovieDetails);

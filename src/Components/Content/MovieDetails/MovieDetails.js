import React from 'react';
import {connect} from 'react-redux';
import {findRecordById, roundScore, printArray} from '../../../assets/utils';

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
            // rating: { avrage: rating},
            // schedule: {
            //     days,
            //     time
            // },
            // premiered,
            // network: { name: network },
            // country: { name: country },
            // status,
            // image: { medium: image },
            // summary,
        }
    }] = findRecordById(movieList, id);

    console.log(findRecordById(movieList, id));

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
                        defaultValue={3.5}
                        precision={0.5}
                        aria-label="rating"
                    />
                </div>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    Sunday 22:00 (30 min)
                </Typography>
                <br />
                <Divider variant="middle" />
                <br />
                <Typography variant="subtitle1" color="textSecondary">
                    premiere:<strong> 2012-04-15</strong>
                    <br />
                    network:<strong> HBO </strong>
                    <br />
                    country:<strong> United States </strong>
                    <br />
                    status:<strong> Ended </strong>
                    <br />
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image="http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"
                title="Mad Max album cover"
            />
            <CardContent className={classes.content}>
                <Typography variant="body1" color="textSecondary">
                    This Emmy winning series is a comic look at the assorted
                    humiliations and rare triumphs of a group of girls in their
                    20s.
                </Typography>
            </CardContent>
        </Card>
    );
};

function mapStateToProps(state) {
    return { movieList: state.movieList, };
}

export default withStyles(styles)(connect(mapStateToProps)(MovieDetails));

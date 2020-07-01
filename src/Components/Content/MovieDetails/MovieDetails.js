import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import {withStyles} from '@material-ui/core/styles';
import styles from './styles';

const MovieDetails = ({classes}) => {

    return (
        <Card className={classes.root}>
            <CardContent className={classes.summary}>
                <br />
                <Typography component="h4" variant="h4" aria-label="title">
                    Girls: Live From Space
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    aria-label="genere"
                >
                    Drama, Romance
                </Typography>
                <div className={classes.rating}>
                    <Chip label="17.4" color="secondary" size="small" />
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
                    humiliations and rare triumphs of a group of girls in
                    their 20s.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(MovieDetails);

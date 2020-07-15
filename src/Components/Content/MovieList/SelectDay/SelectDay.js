import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const week = [
    { id: 1, short: 'Mo', long: 'Monday' },
    { id: 2, short: 'Tu', long: 'Tuesday' },
    { id: 3, short: 'We', long: 'Wednesday' },
    { id: 4, short: 'Th', long: 'Thursday' },
    { id: 5, short: 'Fr', long: 'Friday' },
    { id: 6, short: 'Sa', long: 'Saturday' },
    { id: 7, short: 'Su', long: 'Sunday' },
];

const checkWhichDays = (movieList) => {
    if (!movieList) {
        return [];
    }

    const dayMask = {};
    movieList.forEach( show => {
        const days = show.show?.schedule?.days;
        if (days) {
            days.forEach( day => {
                dayMask[day] = true;
            });
        }
    });

    return dayMask;
}

const SelectDay = ({ classes }) => {
    const dayFilter = useSelector(state => state.dayFilter);
    const movieList = useSelector(state =>  state.movieList);
    const dispatch = useDispatch();

    const dayFilterMask = checkWhichDays(movieList);
    const onSetDayFilter = day => dispatch(actions.setDayFilter(day));

    return (
        <List
            component="nav"
            className={classes.root}
            aria-label="filter movie by day of week"
            dense={true}
        >
            {week.map(day => (
                <ListItem
                    onClick={() => onSetDayFilter(day.long)}
                    selected={dayFilter === day.long}
                    disabled={!dayFilterMask[day.long]}
                    key={day.id}
                    className={classes.item}
                    button
                >
                    <ListItemText>
                        {dayFilter === day.long ? '\u274C' : day.short}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
};

export default withStyles(styles)(SelectDay);

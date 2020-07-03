import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: 'fit-content',
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'start',
        margin: 'auto',
        padding: '0.25rem 0.25rem',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '2rem 2rem',

    },
    item: {
        width: 'auto',
        borderRadius: '2rem 2rem',
    },
}));

const week = [
    {id: 1, short: 'Mo', long: 'Monday'},
    {id: 2, short: 'Tu', long: 'Tuesday'},
    {id: 3, short: 'We', long: 'Wednesday'},
    {id: 4, short: 'Th', long: 'Thursday'},
    {id: 5, short: 'Fr', long: 'Friday'},
    {id: 6, short: 'Sa', long: 'Saturday'},
    {id: 7, short: 'Su', long: 'Sunday'},
];

const SelectDay = ({ dayFilter, onSetDayFilter }) => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="filter movie by day of week">
        {
            week.map((day) => (
                <ListItem
                    onClick={() => onSetDayFilter(day.long)}
                    selected={dayFilter === day.long}
                    key={day.id}
                    className={classes.item}
                    button
                >
                    <ListItemText primary={day.short}/>
                </ListItem>
            ))
        }
        </List>
    );
};

const mapStateToProps = (state) => {
    return {
        dayFilter: state.dayFilter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetDayFilter: (day) => dispatch(actions.setDayFilter(day)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(SelectDay);

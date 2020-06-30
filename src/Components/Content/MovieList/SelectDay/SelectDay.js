import React from 'react';

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
        padding: '0 1rem',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        width: 'auto',
    },
}));

const week = [
    {short: 'Mo', date: '29.06'},
    {short: 'Tu', date: '30.06'},
    {short: 'We', date: '1.07'},
    {short: 'Th', date: '2.07'},
    {short: 'Fr', date: '3.07'},
    {short: 'Sa', date: '4.07'},
    {short: 'Su', date: '5.07'},
    {short: 'Mo', date: '29.06'},
    {short: 'Tu', date: '30.06'},
    {short: 'We', date: '1.07'},
    {short: 'Th', date: '2.07'},
    {short: 'Fr', date: '3.07'},
    {short: 'Sa', date: '4.07'},
    {short: 'Su', date: '5.07'},
];

const SelectDay = () => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="filter movie by day of week">
        {
            week.map((day) => (
                <ListItem button key={day.date}  className={classes.item}>
                    <ListItemText primary={day.short} secondary={day.date}/>
                </ListItem>
            ))
        }
        </List>
    );
};

export default SelectDay;

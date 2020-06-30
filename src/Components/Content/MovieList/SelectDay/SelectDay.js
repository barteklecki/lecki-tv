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
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        width: 'auto',
    },
}));

const week = [
    {id: 1, short: 'Mo'},
    {id: 2, short: 'Tu'},
    {id: 3, short: 'We'},
    {id: 4, short: 'Th'},
    {id: 5, short: 'Fr'},
    {id: 6, short: 'Sa'},
    {id: 7, short: 'Su'},
];

const SelectDay = () => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="filter movie by day of week">
        {
            week.map((day) => (
                <ListItem button key={day.id}  className={classes.item}>
                    <ListItemText primary={day.short}/>
                </ListItem>
            ))
        }
        </List>
    );
};

export default SelectDay;

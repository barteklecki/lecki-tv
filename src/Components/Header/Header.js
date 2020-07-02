import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';

import {withStyles} from '@material-ui/core/styles';
import styles from './styles';

const Header = (props) => {

    const searchKeyDownHandler = (event) => {
            console.log(`Pressed keyCode ${event.key}`);
            if (event.key === 'Enter') {
              // Do code here
              event.preventDefault();
            }
    }

    const {classes} = props;
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <LiveTvIcon fontSize="large" />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        LTV
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onKeyPress={searchKeyDownHandler}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);

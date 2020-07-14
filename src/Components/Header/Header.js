import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../../store/actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {
    const isListFetching = useSelector(state => state.isListFetching);
    const dispatch = useDispatch();
    const history = useHistory();

    const onFetchList = phrase => dispatch(actions.fetchList(phrase));
    const setFetchingFlag = () => dispatch(actions.setFetchingFlag());

    const clickReturnHandler = id => {
        history.goBack();
    };

    const clickLogoHandler = () => {
        history.push('/');
    };

    const searchKeyDownHandler = event => {
        if (event.key === 'Enter') {
            if (event.target.value) {
                history.push('/search');
                setFetchingFlag();
                onFetchList(event.target.value);
                event.preventDefault();
            }
        }
    };

    return (
        <div>
            <AppBar
                position="static"
                color="secondary"
                className={classes.root}
            >
                <Toolbar>
                    <IconButton
                        onClick={clickLogoHandler}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <LiveTvIcon fontSize="large" />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        LTV
                    </Typography>
                    <Switch>
                        <Route
                            path="/info"
                            render={() => (
                                <Button
                                    onClick={clickReturnHandler}
                                    variant="outlined"
                                    className={classes.button}
                                    startIcon={<SearchIcon />}
                                >
                                    Back to search
                                </Button>
                            )}
                        />
                        <Route
                            path="/"
                            render={() => (
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        onKeyPress={searchKeyDownHandler}
                                        disabled={isListFetching}
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            )}
                        />
                    </Switch>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);

import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as NotFoundIcon } from '../../../assets/not-found.svg'

const style = {
    display: 'flex',
    width: 300,
    height: 300,
    margin: 'auto',
    marginTop: '1rem',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity: '10%',
    textAlign: 'center',
}

const icon = {
    width: 100,
    height: 100,
    filter: 'invert(100%)',

}

const NotFound = () => {
    return (
        <div style={style}>
            <CardContent>
                <NotFoundIcon style={icon} /><br/>
                <Typography variant="h6" gutterBottom>
                    No results! <br/>
                </Typography>
            </CardContent>
        </div>
    );
}

export default NotFound;

export default theme => ({
    root: {
        width: '100%',
    },
    table: {
        width: 'auto',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            maxWidth: '1000px',
        },
    },
    [theme.breakpoints.up('sm')]: {
        col1: {
            width: '80px',
            height: '24px',
        },
        col2: {
            width: 'auto',
            height: '24px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        col3: {
            width: 'auto',
            maxWidth: '300px',
            height: '24px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        col4: {
            width: '120px',
            height: '24px',
        },
    },
});

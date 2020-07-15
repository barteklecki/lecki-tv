export default theme => ({
    root: {
        display: 'flex',
        width: 'fit-content',
        maxWidth: '100%',
        height: '2.5rem',
        flexDirection: 'row',
        justifyContent: 'start',
        margin: 'auto',
        padding: 0,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '2rem 2rem',
    },
    item: {
        width: 'auto',
        minWidth: '2.5rem',
        textAlign: 'center',
        borderRadius: '2rem 2rem',
        padding: '0.25rem 0.25rem',
    },
});

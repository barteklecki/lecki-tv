export default theme => ({
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
});

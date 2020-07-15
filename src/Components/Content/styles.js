export default theme => ({
    main: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        alignSelf: 'flex-start',
        paddingLeft: `calc(${theme.spacing(2)}px + 100vw - 100%)`,
    },
});

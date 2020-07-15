import {fade} from '@material-ui/core/styles';

export default (theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left',
        backgroundColor: theme.palette.primary.main,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
            fontWeight: 'bold',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.4),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: `calc(${theme.spacing(8)}px + 100% - 100vw)`,
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '60ch',
            },
        },
    },
    button: {
        borderRadius: '20px',
        borderWeight: '3px',
        marginLeft: 'auto',
        backgroundColor: fade(theme.palette.common.white, 0.2)
    },
});

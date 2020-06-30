import dummyMovieList from './dummyApi';

const initiallState = {
    selectedMovie: 0,
    movieList: [...dummyMovieList],
}

const reducer = (state = initiallState, action) => {
    switch( action.type ) {
        case 'UPDATE_LIST':
            console.log(state);
            return {
                ...state,
            };
        case 'SELECT_MOVIE':
            //
            return {
                ...state,
            };
        default:
            console.log('[Reducer: idle action]');
            return state;
    };
}

export default reducer;
import * as actions from './actions';
import dummyMovieList from './dummyApi';

const initiallState = {
    isListFetching: false,
    dayFilter: '',
    movieList: [...dummyMovieList],
}

const reducer = (state = initiallState, action) => {
    switch( action.type ) {
        case actions.FETCH_LIST:
            console.log(state);
            return {
                ...state,
            };
        case actions.UPDATE_LIST:
            console.log(state);
            return {
                ...state,
            };
        case actions.SET_DAY_FILTER:
            console.log('set filter');
            let newDayFilter = '';
            if ( action.payload.day !== state.dayFilter ) {
                newDayFilter = action.payload.day;
            }
            return {
                ...state,
                dayFilter: newDayFilter,
            };
        default:
            console.log('[Reducer: idle action]');
            return state;
    };
}

export default reducer;
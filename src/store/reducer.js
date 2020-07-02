import * as actions from './actions';
//import dummyMovieList from './dummyApi';

const initiallState = {
    isListFetching: false,
    dayFilter: '',
    //movieList: [...dummyMovieList],
    movieList: [],
};

const reducer = (state = initiallState, action) => {
    switch (action.type) {
        case actions.FETCH_LIST:
            console.log('FETCH_LIST:', action.payload);
            return {
                ...state,
                movieList: action.payload.movieList,
                dayFilter: '',
                isListFetching: false,
            };
        case actions.SET_DAY_FILTER:
            let newDayFilter = '';
            if (action.payload.day !== state.dayFilter) {
                newDayFilter = action.payload.day;
            }
            return {
                ...state,
                dayFilter: newDayFilter,
            };
        case actions.DISPLAY_ERROR:
            console.log('DISPLAY ERROR:', action.payload);
            return state;
        case actions.SET_FETCHING_FLAG:
            return {
                ...state,
                isListFetching: true,
            };
        default:
            console.log('[Reducer: idle action]');
            return state;
    }
};

export default reducer;

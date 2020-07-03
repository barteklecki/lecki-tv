import * as actions from './actions';
//import dummyMovieList from './dummyApi';

const initiallState = {
    isListFetching: false,
    dayFilter: '',
    //movieList: [...dummyMovieList],
    movieList: [],
    errorMessage: '',
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
            console.log('ERROR:', action.payload.message);
            return {
                ...state,
                errorMessage: action.payload.message,
            };
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

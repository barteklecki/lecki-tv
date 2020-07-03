import * as actions from './actions';

const initiallState = {
    isListFetching: false,
    dayFilter: '',
    movieList: [],
    errorMessage: '',
};

const reducer = (state = initiallState, action) => {
    switch (action.type) {
        case actions.FETCH_LIST:
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
            return state;
    }
};

export default reducer;

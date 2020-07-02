export const FETCH_LIST = 'FETCH_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_DAY_FILTER = 'SET_DAY_FILTER';

export const fetchList = ( ) => {
    return {
        type: FETCH_LIST,
    };
};

export const updateList = ( ) => {
    return {
        type: UPDATE_LIST,
    };
};

export const setDayFilter = (day) => {
    return {
        type: SET_DAY_FILTER,
        payload: {day: day},
    };
};
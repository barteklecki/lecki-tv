import axios from 'axios';
const API_URL = 'https://api.tvmaze.com/';

export const FETCH_LIST = 'FETCH_LIST';
export const SET_DAY_FILTER = 'SET_DAY_FILTER';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const SET_FETCHING_FLAG = 'SET_FETCHING_FLAG';

export const fetchList = (phrase) => {
    const url = `${API_URL}search/shows?q=${encodeURIComponent(phrase)}`;
    setFetchingFlag();
    console.log(url);
    return (dispatch) => axios.get(url)
        .then((response) => dispatch({
            type: FETCH_LIST,
            payload: {movieList: response.data}
        }))
        .catch((response) => dispatch(displayError(response)));
};

export const setDayFilter = (day) => {
    return {
        type: SET_DAY_FILTER,
        payload: {day: day},
    };
};

export const displayError = (message) => {
    return {
        type: DISPLAY_ERROR,
        payload: {message: message},
    };
};

export const setFetchingFlag = () => {
    return {
        type: SET_FETCHING_FLAG,
    };
};
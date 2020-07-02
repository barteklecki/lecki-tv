export const roundScore = (value, decPlaces) => {
    let score = value * 10 ** decPlaces;
    score = Math.round(score) / 10 ** decPlaces;
    return score;
}

export const roundRating = (rating) =>  Math.round(rating-0.1)/2;

export const printArray = (arr) => arr.join(', ');

export const findRecordById = (arr, id) => arr.filter( el => el.show.id === +id );

export const filterByDay = (arr, day) => {
        if (day) {
            return arr.filter( el => el.show.schedule.days.find( d => d === day) );
        }
        return arr;
}

export const validateString = (data, key) => data ? data[key] : '';
export const validateArray = (data, key) => data ? data[key] : [];
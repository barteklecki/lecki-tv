export const roundScore = (value, decPlaces) => {
    let score = value * 10 ** decPlaces;
    score = Math.round(score) / 10 ** decPlaces;
    return score;
};

export const roundRating = rating => Math.round(rating - 0.1) / 2;

export const printArray = arr => arr.join(', ');

export const checkString = (data, key) => (data ? data[key] : '');
export const checkArray = (data, key) => (data ? data[key] : []);

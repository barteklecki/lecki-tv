export const roundScore = (value, decPlaces) => {
    let score = value * 10 ** decPlaces;
    score = Math.round(score) / 10 ** decPlaces;
    return score;
}

export const printArray = (arr) => arr.join(', ');

export const findRecordById = (arr, id) => arr.filter( el => el.show.id === +id );
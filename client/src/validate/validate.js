const validate = (data) => {
    const errors = {};

    if (!data.name) {
        errors.name = 'Must have name'
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
        errors.name = 'Must only have letters and spaces'
    } else if (!data.difficulty) {
        errors.difficulty = 'Must have difficulty'
    } else if (!/^[1-5]$/.test(data.difficulty)) {
        errors.difficulty = 'Difficulty must be between 1 and 5'
    }  else if (!data.season) {
        errors.season = 'Must input a season'
    } else if (!/^(Summer|Winter|Autumn|Spring)$/i.test(data.season)) {
        errors.season = 'Season must be: Summer, Winter, Autumn or Spring'
    }
    return errors
};

export default validate;

/*  Para la duración puede ser esta, pero desde mi back no le pido nunca la duración
else if (!activityData.duration) {
        errors.duration = 'Must have duration'
    } else if (!/^(?:[1-9]|1[0-9]|2[0-4])$/.test(activityData.duration)) {
        errors.duration = 'Duration must be between 1 and 24 hours'
    }
*/
import {
    GET_COUNTRIES,
    GET_COUNTRY_ID,
    CLEAN_DETAIL
} from "./actionsType";

const initialState = {
    allCountries: [],
    country: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                country: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                country: {}
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;
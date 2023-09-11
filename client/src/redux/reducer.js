import {
    GET_COUNTRIES,
    GET_COUNTRY_ID,
    CLEAN_DETAIL,
    GET_COUNTRIES_NAME,
    SET_PAGE,
    FILTERS_CONTINENT,
    RESET_ALL,
    GET_ACTIVITIES,
    FILTER_ACTIVITIES,
    SORT_NAME,
    SORT_POPULATION
} from "./actionsType";

const initialState = {
    allCountries: [],
    activities: [],
    country: {},
    page: 0,
    filterByContinent: '',
    filterByActivities: '',
    sortByName: '',
    sortByPopulation: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
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
        case GET_COUNTRIES_NAME:
            return {
                ...state,
                allCountries: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case FILTERS_CONTINENT:
            return {
                ...state,
                filterByContinent: action.payload
            }
        case FILTER_ACTIVITIES:
            return {
                ...state,
                filterByActivities: action.payload
            }
        case SORT_NAME:
            return {
                ...state,
                sortByName: action.payload
            }
        case SORT_POPULATION:
            return {
                ...state,
                sortByPopulation: action.payload
            }
        case RESET_ALL:
            return{
                ...state,
                page: 0,
                filterByContinent: '',
                filterByActivities: '',
                sortByName: '',
                sortByPopulation: ''
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;
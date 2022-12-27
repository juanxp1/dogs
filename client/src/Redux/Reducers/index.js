import {
    GET_ALL_DOGS,
    GET_DOGS_DETAILS,
    NEW_DOGS,
    SEARCH_DOGS,
    RESET_DETALLES
} from '../Action/index'

const initialState = {
    dogs: [],
    dogsDetail: [],
    allDogs: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
            }

        case SEARCH_DOGS:
            return {
                ...state,
                dogs: action.payload
            }

        case GET_DOGS_DETAILS:
            return {
                ...state,
                dogsDetail: action.payload
            }

        case RESET_DETALLES:
            return {
                ...state,
                dogsDetail: []
            }


        default:
            return state;


    }
}

export default rootReducer;
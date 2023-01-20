import {
    GET_ALL_DOGS,
    GET_DOGS_DETAILS,
    NEW_DOGS,
    SEARCH_DOGS,
    RESET_DETALLES,
    ORDEN_POR_NAME,
    ORDEN_POR_PESO,
    FILTRO_TEMPERAMENTO,
    GET_TEMPERAMENTO,
    FILTRO_DB
    
} from '../Action/index'

const initialState = {
    dogs: [],
    dogsDetail: [],
    allDogs: [],
    temperament: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }

        case GET_TEMPERAMENTO:
            return {
                ...state,
                temperament: action.payload,
            }


            case FILTRO_DB:

            const filter = action.payload === "Creados" ? state.allDogs.filter(d => d.createInDb) : state.allDogs.filter(d => !d.createInDb)
            console.log(filter, "filter")
            
            return {
                ...state,
                dogs: filter
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

        case NEW_DOGS:
            return {
                ...state,
                // dogs: [...state.dogs, action.payload],
            }


        case FILTRO_TEMPERAMENTO:
            const allDogs = state.allDogs;
            console.log("holis", allDogs)
            console.log("temperament", action.payload)
            const filtroTemperamento = action.payload === "All" ? allDogs :
                allDogs.filter(r => r.temperament?.split("  ").find(d => (
                    d === action.payload

                )))

            console.log("aaaaaaaaaa", filtroTemperamento)

            return {
                ...state,
                dogs: filtroTemperamento
            };





        case ORDEN_POR_NAME:
            let order = action.payload === 'asc' ?
                state.dogs.sort(function (a, b) {

                    if (a.name.toLowerCase() > b.name.toLowerCase()) {

                        return 1
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1
                    }
                    return 0
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                dogs: order

            }

        case ORDEN_POR_PESO:
            let orderpeso = action.payload === 'menormayor' ?
                state.dogs.sort(function (a, b) {
                    if (a.weight > b.weight) {
                        return 1
                    }
                    if (b.weight > a.weight) {
                        return -1
                    }
                    return 0
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.weight > b.weight) {
                        return -1
                    }
                    if (b.weight > a.weight) {
                        return 1
                    }
                    return 0
                })
            return {
                ...state,
                dogs: orderpeso
            }



        default:
            return state;


    }
}

export default rootReducer;
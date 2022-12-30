import axios from 'axios';
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_DETAILS = "GET_DOGS_DETAILS";
export const NEW_DOGS = "NEW_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const RESET_DETALLES = "RESET_DETALLES";


//allDogss
export const getAllDogs = () => {
    return async function (dispatch) {
        let dog = await axios.get('https://dogs-production-baf1.up.railway.app/dogs')
        //console.log("InfoApi", dog.data)
        return dispatch({
            type: GET_ALL_DOGS,
            payload: dog.data
        })
    }
}

//DogsXQuery
export const seekDogs = (name) => {
    return async function (dispatch) {
        let query = await fetch(`https://dogs-production-baf1.up.railway.app/dogs?name=${name}`)
        let json = await query.json()
        return dispatch({
            type: SEARCH_DOGS,
            payload: json
        })

    };
}

//DetailDogs
export const getDogDetail = (id) => {

    return async (dispatch) => {
        await axios.get(`https://dogs-production-baf1.up.railway.app/dogs/${id}`)
            .then((response) =>
                dispatch({ type: GET_DOGS_DETAILS, payload: response.data })
            )
    };
};


export function resetDetalles() {

    return async function (dispatch) {
        dispatch({
            type: RESET_DETALLES
        })
    }
}

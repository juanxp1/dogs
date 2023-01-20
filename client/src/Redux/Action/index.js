import axios from 'axios';
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_DETAILS = "GET_DOGS_DETAILS";
export const NEW_DOGS = "NEW_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const RESET_DETALLES = "RESET_DETALLES";
export const FILTRO_TEMPERAMENTO = "FILTRO_TEMPERAMENTO";
export const ORDEN_POR_NAME = "ORDEN_POR_NAME";
export const ORDEN_POR_PESO = "ORDEN_POR_PESO";
export const GET_TEMPERAMENTO = "GET_TEMPERAMENTO"
export const FILTRO_DB = "FILTRO_DB"


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

//Temperamntos

export const getTempe = () => {
    return async function (dispatch) {
        let tempe = await axios.get('https://dogs-production-baf1.up.railway.app/temperamento')
        console.log("tempeee", tempe)
        return dispatch({
            type: GET_TEMPERAMENTO,
            payload: tempe.data
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
    }

}


export const filtroDbandPi = (payload) => {
    return {
        type: FILTRO_DB,
        payload
    }
}
//DetailDogs
export const getDogDetail = (id) => {

    return async (dispatch) => {
        await axios.get(`https://dogs-production-baf1.up.railway.app/dogs${id}`)
            .then((response) =>
                dispatch({ type: GET_DOGS_DETAILS, payload: response.data })
            )
    };
};

//reset dogs
export function resetDetalles() {

    return async function (dispatch) {
        dispatch({
            type: RESET_DETALLES
        })
    }
};


//crear
export function createDog(payload) {
    console.log(payload, "paspada")
    return async function (dispatch) {
        await axios.post('https://dogs-production-baf1.up.railway.app/dogs', payload)
            .then((response) => dispatch({ type: NEW_DOGS, payload: response.data }))
    }
}




export const ordenPorName = (payload) => {
    return {
        type: ORDEN_POR_NAME,
        payload
    }
}

export const filtroTemperamento = (payload) => {
    console.log(payload, "paspada")
    return {
        type: FILTRO_TEMPERAMENTO,
        payload
    }
}

export const ordenPorPeso = (payload) => {
    return {
        type: ORDEN_POR_PESO,
        payload

    }
}




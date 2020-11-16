import { FETCH_FILM_FAILURE, FETCH_FILM_REQUEST, FETCH_FILM_SUCCESS} from "../actions/buscadorAction";

const initialState = {
    loading: false,
    film: [],
    error:''
}

const buscador = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FILM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_FILM_SUCCESS:
            return {
                loading: false,
                film: action.payload,
                error: ''
            }
        case FETCH_FILM_FAILURE:
            return{
                loading: false,
                pokemon:[],
                error: action.payload
            }            
        default: return state;
    }
}

export default buscador;
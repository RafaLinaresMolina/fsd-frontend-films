import Axios from "axios";

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAILURE = 'FETCH_FILM_FAILURE';

export const fetchFilmRequest = () => {
    return {
        type: FETCH_FILM_REQUEST
    }
}

export const fetchFilmSuccess = (Film) => {
    return {
        type: FETCH_FILM_SUCCESS,
        payload: Film
    }
}

export const fetchFilmFailure = (error) => {
    return {
        type: FETCH_FILM_FAILURE,
        payload: error
    }
}

const fetchFilm = (valor) => {
    return (dispatch) => {
        dispatch(fetchFilmRequest());
        Axios.get('/title/:name')
        .then(response => {
            dispatch(fetchFilmSuccess([response.data]));
        })
        .catch(error => {
            dispatch(fetchFilmFailure('No se encontro la pelicula'));
        });
    }
}

export default fetchFilm;
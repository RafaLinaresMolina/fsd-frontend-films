import axios from 'axios';
import store from '../store';
import { UPDATE_FILMS, SET_FILMS } from '../types/filmTypes';

export const getAllFilms = async() => {
    const offset = !store.getState().filmReducer.films.stored ? 0 : store.getState().filmReducer.films.stored;
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/films/film/fulldata/?offset=${offset}`)
    res.data.stored = res.data.rows.length;
    !offset ? store.dispatch({ type: SET_FILMS, payload: res.data }) : store.dispatch({ type: UPDATE_FILMS, payload: res.data });
}

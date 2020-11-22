import axios from 'axios';
import store from '../store';
import { UPDATE_FILMS, SET_FILMS, SET_FILMS_BY_TITLE, UPDATE_FILMS_BY_TITLE, SET_FILMS_BY_GENRE, UPDATE_FILMS_BY_GENRE, SET_FILMS_BY_ACTOR, UPDATE_FILMS_BY_ACTOR } from '../types/filmTypes';

export const getAllFilms = async() => {
    const offset = !store.getState().filmReducer.films.stored ? 0 : store.getState().filmReducer.films.rows.length;
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/films/film/fulldata/?offset=${offset}`)
    const payload = {
      count: res.data.count,
      stored: store.getState().filmReducer.films.stored ? store.getState().filmReducer.films.stored + res.data.rows.length : res.data.rows.length,
      rows: store.getState().filmReducer.films.rows.concat(res.data.rows),
    }

    !offset ? store.dispatch({ type: SET_FILMS, payload }) : store.dispatch({ type: UPDATE_FILMS, payload});
}
export const getFilmsByName = async(name) => {
    const offset = !store.getState().filmReducer.filmsByTitle.rows.length ? 0 : store.getState().filmReducer.filmsByTitle.rows.length;
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/films/title/${name?name:store.getState().filmReducer.filmsByTitle.prefix}/?offset=${offset}`)
    
    const payload = {
      prefix: name,
      count: res.data.count,
      stored: store.getState().filmReducer.filmsByTitle.stored ? store.getState().filmReducer.filmsByTitle.stored + res.data.rows.length : res.data.rows.length,
      rows: store.getState().filmReducer.filmsByTitle.rows.concat(res.data.rows),
    }


    !offset ? store.dispatch({ type: SET_FILMS_BY_TITLE, payload }) : store.dispatch({ type: UPDATE_FILMS_BY_TITLE, payload });
}
 
export const getFilmsByGenre = async(genre) => {
    const offset = !store.getState().filmReducer.filmsByGenre.stored ? 0 : store.getState().filmReducer.filmsByGenre.stored;
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/films/genre/name/${genre?genre:store.getState().filmReducer.filmsByGenre.prefix}/?offset=${offset}`)
    const payload = {
      prefix: genre,
      count: res.data.count,
      stored: store.getState().filmReducer.filmsByGenre.stored ? store.getState().filmReducer.filmsByGenre.stored + res.data.rows.length : res.data.rows.length,
      rows: store.getState().filmReducer.filmsByGenre.rows.concat(res.data.rows),
    }

    !offset ? store.dispatch({ type: SET_FILMS_BY_GENRE, payload }) : store.dispatch({ type: UPDATE_FILMS_BY_GENRE, payload });
}

export const getFilmsByActor = async(actor) => {
    const offset = !store.getState().filmReducer.filmsByActor.stored ? 0 : store.getState().filmReducer.filmsByActor.stored;
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/films/actor/name/${actor?actor:store.getState().filmReducer.filmsByActor.prefix}/?offset=${offset}`)
    const payload = {
      prefix: actor,
      count: res.data.count,
      stored: store.getState().filmReducer.filmsByActor.stored ? store.getState().filmReducer.filmsByActor.stored + res.data.rows.length : res.data.rows.length,
      rows: store.getState().filmReducer.filmsByActor.rows.concat(res.data.rows),
    }

    !offset ? store.dispatch({ type: SET_FILMS_BY_ACTOR, payload }) : store.dispatch({ type: UPDATE_FILMS_BY_ACTOR, payload });
}
 
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import fetchFilm from '../../redux/actions/buscadorAction';

const BuscadorFilm = () => {
    const dispatch = useDispatch();
    const [film_name, set_film_name] = useState('');

    return(
        <div classname="form-group">
            <label htmlFor="buscar_film" className="text_white">Buscar Film</label>
            <input type="text" className="form-control" id="buscar_film"
                value={film_name}
                onChange={
                    (event) => {
                        set_film_name(event.target.value);
                    }
                }
                />
                <button className="btn btn-primary mt-3" onclick={
                    () => {
                        dispatch(fetchFilm(film_name))
                    }
                }>Enviar</button>
        </div>
    );
}

export default BuscadorFilm;


import React from 'react';
import {useSelector} from 'react-redux';

const SearchResult = (props) => {
  const buscador = useSelector((state) => state.buscador);
  return(
    <div>
      <h3 className="text-white">Resultado: </h3>
      {<div className="text-warning">Searching...</div>}
      {
        buscador.film.length >= 1 &&
        <div className="text-success">
          <img src={buscador.film.sprites.front_default} alt="Film" />
          <span>{buscador.props.original_title}</span>
          </div>

            }
            {buscador.error !=='' && <span className="text-danger">{buscador.error}</span>}
        </div>
     
  );
}

export default SearchResult;
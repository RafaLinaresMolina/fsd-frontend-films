import React, { Component, useEffect, useState } from 'react';
import FilmList from '../FilmList/FilmList';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { getFilmsByName } from '../../redux/actions/film';

const Search = (props) =>{
  
  useEffect(() => {
    try {
     
      
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [search, setSearch]= useState("");
  

  const eventHandler = (ev) =>{
    setSearch(ev.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
try { await getFilmsByName(search)    
  
} catch (error) {
  console.log(error.message)
}
}


      return(
            <form onSubmit={handleSubmit}>
              {search}
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input"
                        onChange={eventHandler}
                        type="text" 
                        placeholder="Movie to Search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }

export default Search;
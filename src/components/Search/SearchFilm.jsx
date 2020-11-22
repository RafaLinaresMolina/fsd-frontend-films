import React, {useState } from 'react';
import { Button } from 'arwes';
import { getFilmsByName } from '../../redux/actions/film';
import './SearchFilm.scss';
import MagnifyIcon from 'mdi-react/MagnifyIcon';


const Search = (props) => {

  const [search, setSearch] = useState("");

  const eventHandler = (ev) => {
    setSearch(ev.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getFilmsByName(search)

    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="field-search">
        <div className="control">
          <input
            className="inputSearch"
            onChange={eventHandler}
            type="text"
          />
        </div>
        <div className="control">
          <Button className="button is-info" >
            <MagnifyIcon className='verticalAlignIcons' />Search
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Search;
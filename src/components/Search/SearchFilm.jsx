import React, { useEffect, useState } from "react";
import { Button } from "arwes";
import {
  getFilmsByName,
} from "../../redux/actions/film";
import "./SearchFilm.scss";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import { CLEAR_FILMS_BY_TITLE } from "../../redux/types/filmTypes";
import { connect } from "react-redux";

const Search = (props) => {
  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [search, setSearch] = useState("");

  const eventHandler = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      props.dispatch({ type: CLEAR_FILMS_BY_TITLE, payload: {} });
      await getFilmsByName(search);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-search">
        <div className="control">
          <input className="inputSearch" onChange={eventHandler} type="text" />
        </div>
        <div className="control">
          <Button className="button is-info">
            <MagnifyIcon className="verticalAlignIcons" />
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default connect()(Search);

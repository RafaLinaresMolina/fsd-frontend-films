import { Content, Frame, Image } from "arwes";
import React from "react";
import FilmList from "../../components/FilmList/FilmList";
import "./Catalog.scss";

function Catalog(props) {
  return (
      <div className="catalogContent">
        <Content>
          <h2 className="catalogTitle">{props.title}</h2>
          <FilmList/>
        </Content>
      </div>
  );
}

export default Catalog;

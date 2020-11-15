import { Content } from "arwes";
import React from "react";
import FilmList from "../../components/FilmList/FilmList";
import "./Catalog.scss";

function Catalog(props) {
  return (
    <div style={props.showAllways ? {display: 'block'} : {display: 'none'}} className={`catalogContent`}>
      <Content>
        <h2 className="catalogTitle">{props.title}</h2>
        <FilmList content={props.content}/>
      </Content>
    </div>
  );
}

export default Catalog;

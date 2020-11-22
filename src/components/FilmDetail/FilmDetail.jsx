import { Frame, Image } from "arwes";
import React from "react";
import "./FilmDetail.scss";
const FilmDetail = ({movie, setSelectedFilm}) => {

  const selectLayer = (movie) => {
    return movie.stock && movie.status
      ? { layer: "primary", filter: "none" }
      : { layer: "disabled", filter: "grayscale(100%)" };
  };

  return (
    <div className="frames" onClick={() => setSelectedFilm(movie)}>
      <Frame
        anim
        corners={4}
        className="marvelousPadding"
        layer={selectLayer(movie).layer}
      >
        <div className="glassPannel"></div>
        <Image
          animate
          className="filmPortraitPoster"
          style={{
            filter: selectLayer(movie).filter,
          }}
          layer={selectLayer(movie).layer}
          resources={movie.img_portrait}
        >
          {movie.original_title}
        </Image>
      </Frame>
    </div>
  );
};

export default FilmDetail; 

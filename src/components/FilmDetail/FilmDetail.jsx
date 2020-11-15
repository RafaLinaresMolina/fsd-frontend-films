import { Frame, Image } from "arwes";
import React from "react";

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
        style={{ padding: "1em" }}
        layer={selectLayer(movie).layer}
      >
        <div className="glassPannel"></div>
        <Image
          animate
          style={{
            maxWidth: "13em",
            filter: selectLayer(movie).filter,
            margin: "0",
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

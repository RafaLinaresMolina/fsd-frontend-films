import { Blockquote, Button, Content, Frame, Image } from "arwes";
import React, { useState } from "react";
import { connect } from "react-redux";
import "./FilmList.scss";
function FilmList(props) {

  const [selectedFilm, setSelectedFilm] = useState({});

  const selectLayer = (movie) => {
    return movie.stock && movie.status
      ? { layer: "primary", filter: "none" }
      : { layer: "disabled", filter: "grayscale(100%)" };
  };

  return (
    <div className="theList">
      <div className="wrapperContent">
        <div className="movieListContainer">
          {props.content?.rows.map((movie) => (
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
          ))}
        </div>
      </div>
      <div
        className={`detailFilm ${
          selectedFilm?.id
            ? "notification-display-block"
            : "notification-display-none"
        }`}
        style={{ backgroundImage: `url(${selectedFilm.img_landscape}` }}
      >
        <div className="detailFilmWrapper">
          <Frame anim corners={4} layer={selectLayer(selectedFilm).layer}>
            <Content style={{ padding: "1em" }}>
              <Button onClick={() => setSelectedFilm({})}> CLOSE </Button>
              <div className="detailHeaderWrapper">
                <div className="titleWrapper">
                  <h1>{selectedFilm.original_title}</h1>
                </div>

                <div className="releaseDateWrapper">
                  <h3>
                    RELEASE DATE:{" "}
                    {new Date(selectedFilm.release_date).toLocaleDateString()}
                  </h3>
                </div>
              </div>

              <div className="synopsisQuote">
                <Frame
                  anim
                  corners={4}
                  style={{ padding: "1em" }}
                  layer={selectLayer(selectedFilm).layer}
                >
                  <h3>Synopsis:</h3>
                  <Blockquote>{selectedFilm.synopsis}</Blockquote>
                </Frame>
              </div>

              <div className="roster">
                <div className="actorsRoster">
                  <h3>Actors:</h3>
                  {selectedFilm.Actors?.map((actor) => {
                    return (
                      <Frame corners={4}>
                        
                          <Image
                            anim
                            animate
                            style={{
                              maxWidth: "7em",
                              margin: "1em",
                            }}
                            layer={selectLayer(selectedFilm).layer}
                            resources={actor.img_portrait}
                          >{actor.name} {actor.last_name}</Image>
                        
                      </Frame>
                    );
                  })}
                </div>
                <div className="genreRoster">
                  <h3>Genres:</h3>
                  {selectedFilm.Genres?.map((genre) => {
                    return <Blockquote>{genre.name} </Blockquote>;
                  })}
                </div>
                
              </div>
              <div className="controlWrapper">
                {props.user?.creditCard ? (
                  <Button>Alquilar</Button>
                ) : (
                  <Blockquote layer="alert">
                    You need a credit card for rent movies
                  </Blockquote>
                )}
              </div>
            </Content>
          </Frame>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.userReducer.user };
};

export default connect(mapStateToProps)(FilmList);

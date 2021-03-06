import { Blockquote, Button, Content, Frame, Image, Loading } from "arwes";
import React, { useState } from "react";
import { connect } from "react-redux";
import "./FilmList.scss";
import FlatList from "flatlist-react";
import FilmDetail from "../FilmDetail/FilmDetail";
import { getAllFilms } from "../../redux/actions/film";
import { ERROR_NOTIFICATION, INFO_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION } from "../../redux/types/notificationTypes";
import CloseIcon from "mdi-react/CloseIcon";
import CartArrowDownIcon from 'mdi-react/CartArrowDownIcon'
import { SET_ITEM } from "../../redux/types/cartTypes";
function FilmList(props) {
  const [selectedFilm, setSelectedFilm] = useState({});

  const renderFilmDetail = (film, id) => {
    return (
      <FilmDetail key={id} movie={film} setSelectedFilm={setSelectedFilm} />
    );
  };

  const fetchFilms = async () => {
    // this is simple example but most of good paginated apis will give you total items count and offset information
    try {
      await getAllFilms();
    } catch (err) {
      props.dispatch({
        type: ERROR_NOTIFICATION,
        payload: {
          notification: {
            title: "ERROR RETRIVING FILMS!",
            msg: err.message,
          },
          show: true,
        },
      });
    }
  };

  return (
      <div className="theList">
        <div className="wrapperContent">
          <div className="movieListContainer">
            <FlatList
              list={props.content?.rows}
              renderItem={renderFilmDetail}
              renderWhenEmpty={() => (
               []
              )}
              hasMoreItems={props.films.count}
              loadMoreItems={async () => await fetchFilms}
            />
          </div>
        </div>
        <div
          className={`detailFilm ${
            selectedFilm?.id
              ? "notification-display-block"
              : "notification-display-none"
          }`}
        >
          <div
            className="detailFilmWrapper"
            style={{ backgroundImage: `url(${selectedFilm.img_landscape}` }}
          >
            <Frame anim corners={4}>
              <Content style={{ padding: "1em" }}>
                <Button onClick={() => setSelectedFilm({})}>
                  <CloseIcon className="verticalAlignIcons" />
                </Button>
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
                  <Frame anim corners={4} style={{ padding: "1em" }}>
                    <h3>Synopsis:</h3>
                    <Blockquote>{selectedFilm.synopsis}</Blockquote>
                  </Frame>
                </div>

                <div className="roster">
                  <div className="actorsRoster">
                    <h3>Actors:</h3>
                    {selectedFilm.Actors?.map((actor) => {
                      return (
                        <Frame corners={4} style={{ marginBottom: "1em" }}>
                          <Image
                            anim
                            animate
                            style={{
                              maxWidth: "7em",
                              margin: "1em",
                            }}
                            resources={actor.img_portrait}
                          >
                            {actor.name} {actor.last_name}
                          </Image>
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
                    selectedFilm.stock ? (
                      <Button onClick={() => {
                        try{
                          console.log(props.items.includes(selectedFilm))
                          if(!props.items.includes(selectedFilm)){
                            props.dispatch({
                              type: SET_ITEM,
                              payload: selectedFilm,
                            });
                            props.dispatch({
                              type: INFO_NOTIFICATION,
                              payload: {
                                notification: {
                                  title: "Film added to cart",
                                  msg: `Film ${selectedFilm.original_title} added to cart.`,
                                },
                                show: true,
                              },
                            });
                          }else{
                            props.dispatch({
                              type: INFO_NOTIFICATION,
                              payload: {
                                notification: {
                                  title: "Info",
                                  msg: 'Film already in cart',
                                },
                                show: true,
                              },
                            });
                          }
                          setSelectedFilm({});
                        }catch(err){
                          props.dispatch({
                            type: WARNING_NOTIFICATION,
                            payload: {
                              notification: {
                                title: "Error renting the film!",
                                msg: err.message,
                              },
                              show: true,
                            },
                          });
                        }
                      }}> < CartArrowDownIcon className='verticalAlignIcons'/> Alquilar</Button>
                    ) : (
                      <h4 style={{ userSelect: "none" }}>OUT OF STOCK</h4>
                    )
                  ) : (
                    <Blockquote layer="alert" style={{ userSelect: "none" }}>
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
  return { user: state.userReducer.user, 
    films: state.filmReducer.films,
    items: state.cartReducer.items
   };
};

export default connect(mapStateToProps)(FilmList);

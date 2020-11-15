import { connect } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { Content, Header } from "arwes";
import Footer from "../../components/Footer/Footer";
import "./ClientZone.scss";
import { useEffect } from "react";
import { getAllFilms } from "../../redux/actions/film";
import { ERROR_NOTIFICATION } from "../../redux/types/notificationTypes";
function ClientZone(props) {

  useEffect(() => {
    getAllFilms().catch(err => props.dispatch({
      type: ERROR_NOTIFICATION,
      payload: {
        notification: {
          title: "ERROR RETRIVING FILMS!",
          msg: err.message,
        },
        show:true
      },
    }))
  }, [])

  return (
    <div className="clientZone">
      <Content>
        <div className="header">
          <Header animate>
            <div className="headerLogo">
              <h1>GEEKFLIX - WELCOME {props.user?.name}</h1>
            </div>
          </Header>
        </div>
        
        <div className="contentClient">
          <Catalog title={"Search result "} content={props.filmsByTitle} showAllways={false} />
          <Catalog title={`Actor: ${""} `} content={props.films} showAllways={true} />
          <Catalog title={`Genre: ${""} `} content={props.filmsByGenre} showAllways={false} />
          <Catalog title={"All Films"} content={props.films} showAllways={true}/>
        </div>

        <Footer />
      </Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    films: state.filmReducer.films,
    filmsByTitle: state.filmReducer.filmsByTitle,
    filmsByActor: state.filmReducer.filmsByActor,
    filmsByGenre: state.filmReducer.filmsByGenre,
  };
};

export default connect(mapStateToProps)(ClientZone);

import { connect } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { Content, Header } from "arwes";
import Footer from "../../components/Footer/Footer";
import "./ClientZone.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { useEffect } from "react";
import {getAllFilms} from "../../redux/actions/film";
import {ERROR_NOTIFICATION} from "../../redux/types/notificationTypes";

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
        <div className="headerWrapper">
          <HeaderComponent />
        </div>
        
        <div className="contentClient">
          <Catalog title={"Search result "} content={props.filmsByTitle} showAllways={true} />
{/*           <Catalog title={`Actor: ${""} `} content={props.filmsByActor} showAllways={true} />
          <Catalog title={`Genre: ${""} `} content={props.filmsByGenre} showAllways={true} /> */}
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

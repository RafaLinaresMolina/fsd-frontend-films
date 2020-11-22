import { connect } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { Button, Content, Frame, Header } from "arwes";
import Footer from "../../components/Footer/Footer";
import "./ClientZone.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { useEffect, useState } from "react";
import {getAllFilms, getFilmsByActor, getFilmsByGenre, getFilmsByName} from "../../redux/actions/film";
import {ERROR_NOTIFICATION} from "../../redux/types/notificationTypes";
import SearchFilm from '../../components/Search/SearchFilm'
import {logOut} from '../../redux/actions/auth'
import ExitRunIcon from "mdi-react/ExitRunIcon";
import ProfileDetail from "../Profile/ProfileDetail";
import UserTable from '../UserProfile/component/UserTable'
function ClientZone(props) {

  const [togle, setTogle] = useState(true);

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
          <Header style={{width: '100%'}}>
            <HeaderComponent showFilms={<Button onClick={() => {setTogle(true)}}>Films</Button>} showProfile={<Button onClick={() => {setTogle(false)}}>Profile</Button>}/>
            
          </Header>
        </div>
        
        <div style={togle ? {display: 'block'} : {display: 'none'}} className={`contentClient`}>
          <SearchFilm />
          <Catalog title={`Search by Title `} content={props.filmsByTitle} fetchMoreItems={getFilmsByName} showAllways={false} />
          <Catalog title={`Search by Actor `} content={props.filmsByActor} fetchMoreItems={getFilmsByActor} showAllways={false} />
          <Catalog title={`Search by Genre `} content={props.filmsByGenre} fetchMoreItems={getFilmsByGenre} showAllways={false} /> 
          <Catalog title={`All Films`} content={props.films} fetchMoreItems={getAllFilms} showAllways={true}/>
        </div>
        <div style={togle ? {display: 'none'} : {display: 'block'}} className={`profileZone`}>
        <div className="contentAdmin" style={{padding: '1em', marginBottom: '2.5em'}}>
          <div className="profileAdmin">
            <ProfileDetail user={props.user} />
            <div className="actions">
              <Frame anim corners={4} style={{ padding: "1em" }} layer="primary">
                <h2>Actions</h2>
                <Button onClick={async() => await logOut(props.user.token)}>
                  <ExitRunIcon className="verticalAlignIcons"/> Logout
                </Button>
              </Frame>
            </div>
           
          </div>
          <div className="allOrdersContent">
            <UserTable />
          </div>
        </div>
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

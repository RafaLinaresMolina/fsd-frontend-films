import { connect } from "react-redux";
import Profile from "../../containers/Profile/Profile";
import Catalog from "../../components/Catalog/Catalog";
import { Content } from "arwes";
import Footer from "../../components/Footer/Footer";
import "./ClientZone.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
function ClientZone(props) {
  return (
    <div className="clientZone">
      <Content>
        <div className="headerWrapper">
          <HeaderComponent />
        </div>

        <div className="contentClient">
          <Catalog title={"Ultimos estrenos"} />
          <Catalog title={"Ciencia ficción"} />
        </div>

        <Footer />
      </Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(ClientZone);

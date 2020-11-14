import { connect } from "react-redux";
import Profile from "../../containers/Profile/Profile";
import Catalog from "../../components/Catalog/Catalog";
import { Content, Header, Link } from "arwes";
import Footer from "../../components/Footer/Footer";
import "./ClientZone.scss";
function ClientZone(props) {
  return (
    <div className="clientZone">
      <Content>
        <div className="header">
          <Header animate>
            <div className="headerLogo">
              <h1>GEEKFLIX - WELLCOME {props.user?.name}</h1>
            </div>
          </Header>
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

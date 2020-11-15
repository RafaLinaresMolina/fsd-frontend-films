import { connect } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import { Content, Header } from "arwes";
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
          <Catalog title={"Search result "} content={props} showAllways={false} />
          <Catalog title={`Actor: ${""} `} content={props} showAllways={false} />
          <Catalog title={`Genre: ${""} `} content={props} showAllways={false} />
          <Catalog title={"All Films"} content={props} />
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

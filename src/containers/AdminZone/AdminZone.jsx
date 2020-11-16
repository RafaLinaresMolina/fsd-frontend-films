import { connect } from "react-redux";
import ProfileDetail from "../Profile/ProfileDetail";
import { Button, Content, Frame, Header } from "arwes";
import Footer from "../../components/Footer/Footer";
import AdminTable from "../../containers/AdminProfile/component/AdminTable";
import "./AdminZone.scss";
import { logOut } from "../../redux/actions/auth";
import ExitRunIcon from 'mdi-react/ExitRunIcon'
function AdminZone(props) {
  return (
    <Content>
      <div className="adminZone">
        <div className="header">
          <Header animate>
            <div className="headerLogo">
                <h1>GEEKFLIX - ADMINISTRATION PANEL</h1>
              
            </div>
          </Header>
        </div>




        <div className="contentAdmin">
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
            <AdminTable />
          </div>
        </div>




        <Footer />
      </div>
    </Content>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(AdminZone);

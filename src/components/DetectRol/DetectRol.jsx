import { connect } from "react-redux";
import Profile from "../../containers/Profile/Profile"; 

function DetectRol (props) {
    const cargarVista = (roleId) => {
      const layouts = {
        0: <h1>ADMIN</h1>,
        1: <Profile/>,
      };
      return layouts[roleId] ? (
        layouts[roleId]
      ) : (
        ""
      );
    };
  
    return (
      <div className="homeInfo">
        {cargarVista(props.user.rol_id)}
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return {user: state.userReducer.user}
  }
  
  export default connect(mapStateToProps) (DetectRol);

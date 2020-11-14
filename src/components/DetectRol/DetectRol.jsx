import { connect } from "react-redux";
import ClientZone from "../../containers/ClientZone/ClientZone";

function DetectRol (props) {
    const cargarVista = (roleId) => {
      const layouts = {
        0: <h1>ADMIN</h1>,
        1: <ClientZone/>,
      };
      return layouts[roleId] ? (
        layouts[roleId]
      ) : (
        ""
      );
    };
  
    return (
        cargarVista(props.user.rol_id)
    );
  }
  
  const mapStateToProps = state => {
    return {user: state.userReducer.user}
  }
  
  export default connect(mapStateToProps) (DetectRol);
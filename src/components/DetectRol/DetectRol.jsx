import { connect } from "react-redux";
import AdminZone from "../../containers/AdminZone/AdminZone";
import ClientZone from "../../containers/ClientZone/ClientZone";

function DetectRol (props) {
    const cargarVista = (roleId) => {
      console.log(roleId)
      const layouts = {
        0: <AdminZone/>,
        1: <ClientZone/>,
      };
      return layouts[roleId] ? (
        layouts[roleId]
      ) : (
        ""
      );
    };
  
    return (
        cargarVista(+props.user.rol_id)
    );
  }
  
  const mapStateToProps = state => {
    return {user: state.userReducer.user}
  }
  
  export default connect(mapStateToProps) (DetectRol);
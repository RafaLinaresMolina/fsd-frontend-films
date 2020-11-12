import { connect } from "react-redux";

function DetectRol (props) {
    const cargarVista = (roleId) => {
      const layouts = {
        0: <h1>ADMIN</h1>,
        1: <h1>CLIENTE</h1>,
      };
      return layouts[roleId] ? (
        layouts[roleId]
      ) : (
        ""
      );
    };
  
    return (
      <div className="homeInfo">
        {cargarVista(props.user.roleId)}
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return {user: state.userReducer.user}
  }
  
  export default connect(mapStateToProps) (DetectRol);

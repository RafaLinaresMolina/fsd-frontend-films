import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getOrders} from "../../redux/actions/profile"
import UserTable from "../UserProfile/component/UserTable"


function Profile(props) {
  useEffect(() => {
    getOrders(props.token).catch(error => console.log(error))
  }, []);

  const typeAccout = (roleId) => {
    const roles = {
      0: 'Administrator',
      1: 'Client',
    }
    return roles[roleId];
  }
    
  return (
    <div className="ProfileContainer">
      <div className="ProfileData">
        <label> Nombre: <span>{props.user.name}</span></label>
        <label> Apellidos: <span>{props.user.last_name}</span></label>
        <label> Direccion: <span>{props.user.address}</span></label>
        <label> Cuenta de tipo: <span>{typeAccout(props.user.rol_id)}</span></label>
        <label> Correo: <span>{props.user.email}</span></label>
      </div>
      {props.orders?<UserTable data={props.orders}/>:""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userReducer.user, token: state.userReducer.token,orders: state.profileReducer.orders };
};

export default connect(mapStateToProps)(Profile);
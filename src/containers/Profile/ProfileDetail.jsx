import { Frame } from "arwes";
import React, { useEffect } from "react";
import { getOrders } from "../../redux/actions/profile";
import "./ProfileDetail.scss";

function ProfileDetail(props) {
  const typeAccout = (roleId) => {
    const roles = {
      0: "Administrator",
      1: "Client",
    };
    return roles[roleId];
  };

  return (
    <div className="ProfileContainer">
      <div className="ProfileData">
        <Frame anim corners={4} style={{ padding: "1em" }} layer="primary">
          <div>
            {" "}
            NAME: <span>{props.user?.name}</span>
          </div>
          <div>
            {" "}
            LAST NAME: <span>{props.user?.last_name}</span>
          </div>
          {props.user?.rol_id !== undefined ? <div>
            {" "}
            PRIVILEGE LEVEL: <span>{typeAccout(props.user?.rol_id)}</span>
          </div>: ""}
          <div>
            {" "}
            CONTACT: <span>{props.user?.email}</span>
          </div>
        </Frame>
      </div>{" "}
    </div>
  );
}

export default ProfileDetail;

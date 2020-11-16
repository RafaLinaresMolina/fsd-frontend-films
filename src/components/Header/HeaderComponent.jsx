import { Button } from "arwes";
import React, { useState } from "react";
import "../../containers/Login/Login.scss";
import "../../containers/Register/Register.scss";
import "./HeaderComponent.scss";
import ShoppingBasketIcon from "mdi-react/ShoppingBasketIcon";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";

function HeaderComponent(props) {
  const [showCart, setShowCart] = useState(false);

  const showModalCart = () => {
    setShowCart(true);
  };
  const hideModalCart = () => {
    setShowCart(false);
  };

  return (
    <div className="container">
      <Modal
        show={showCart}
        handleClose={hideModalCart}
        title={"Rental order"}
        icon={<ShoppingBasketIcon className="verticalAlignIcons" />}
      >
        asd
      </Modal>
      <div className="logoContainer">
        <div className="logo">
          <h1> GEEKFLIX</h1>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="buttonElement">
          <h2>FILMS</h2>
        </div>
        <div className="buttonElement">
          <h2>PROFILE</h2>
        </div>
        <div className="shoppingCart">
          <Button onClick={showModalCart}>
            {" "}
            <ShoppingBasketIcon className="verticalAlignIcons" />{" "}
            {props.items.length}
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
  };
};

export default connect(mapStateToProps)(HeaderComponent);

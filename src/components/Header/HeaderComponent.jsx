import { Button } from "arwes";
import React, { useState } from "react";
import "../../containers/Login/Login.scss";
import "../../containers/Register/Register.scss";
import "./HeaderComponent.scss";
import ShoppingBasketIcon from "mdi-react/ShoppingBasketIcon";
import CreditCardIcon from "mdi-react/CreditCardIcon";
import NukeIcon from "mdi-react/NukeIcon"
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import GenericReactTable from "../GenericTable/GenericReactTable";
import { ERROR_NOTIFICATION, INFO_NOTIFICATION } from "../../redux/types/notificationTypes";
import { createOrder } from "../../redux/actions/order";
import { CLEAR_CART } from "../../redux/types/cartTypes";

function HeaderComponent(props) {
  const [showCart, setShowCart] = useState(false);

  const showModalCart = () => {
    setShowCart(true);
  };
  const hideModalCart = () => {
    setShowCart(false);
  };

  const columns = [
    

        {
          Header: "Id",
          Cell: (obj) => {
            console.log(obj.row.original)
            return obj.row.original.id;
          }
        },
        {
          Header: "Title",
          Cell: (obj) => {
            return obj.row.original.original_title;
          }
        },
        {
          Header: "#",
          Cell: () => {
            return 1
          }
        },
  ];

  return (
    <div className="container">
      <div className="logoContainer">
        <div className="logo">
          <h1> GEEKFLIX</h1>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="buttonElement">
          <h2>{props.showFilms}</h2>
        </div>
        <div className="buttonElement">
          <h2>{props.showProfile}</h2>
        </div>
        <div className="shoppingCart">
          <Button onClick={showModalCart}>
            {" "}
            <ShoppingBasketIcon className="verticalAlignIcons" />{" "}
            {props.items.length}
          </Button>
        </div>
      </div>
      <Modal
        show={showCart}
        handleClose={hideModalCart}
        title={"Rental order"}
        icon={<ShoppingBasketIcon className="verticalAlignIcons" />}
      >
        <div className="paymantWrapper" style={{display: 'flex', flexDirection: 'column', margin: '1em'}}>
          <div className="tableWrapper" style={{overflowY: 'scroll', display: 'flex', height: '15em'}}>
           <GenericReactTable data={props.items} columns={columns}/> 
          </div>
          <div className="actionsPay" style={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '1em'}}>
            {props.items.length ? 
            <Button onClick={async() => {
              const body = props.items.map(item => {
                return { FilmId: item.id, quantity: 1}
              })
              try{
                await createOrder({Films: body}, props.user.token);
                props.dispatch({
                  type: CLEAR_CART,
                  payload: {},
                });
                hideModalCart();
              }catch(err){
                props.dispatch({
                  type: ERROR_NOTIFICATION,
                  payload: {
                    notification: {
                      title: "ERROR CREATING THE ORDER!",
                      msg: err.message,
                    },
                    show: true,
                  },
                });
              }
            }}>
              <CreditCardIcon className="verticalAlignIcons" /> Order!
            </Button>: ''}
            <div style={{width: '3em'}}></div>
            <Button onClick={() => {
              props.dispatch({
                  type: CLEAR_CART,
                  payload: {},
                });
                props.dispatch({
                  type: INFO_NOTIFICATION,
                  payload: {
                    notification: {
                      title: "CAUTION!",
                      msg: "The cart was nuked!",
                    },
                    show: true,
                  },
                });
                hideModalCart();
            }}>
              <NukeIcon className="verticalAlignIcons" /> Erase!
            </Button>
          </div>
          
          
        </div>
        
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    items: state.cartReducer.items,
  };
};

export default connect(mapStateToProps)(HeaderComponent);

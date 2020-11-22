import React, {useState} from 'react';
import './Login.scss';
import {connect} from 'react-redux';
import { Button } from "arwes";
import {loginAction} from '../../redux/actions/auth';
import {ERROR_NOTIFICATION, WARNING_NOTIFICATION} from '../../redux/types/notificationTypes';
import KeyIcon from 'mdi-react/KeyIcon';

const validationErrorMessages={
  errorEmptyRequired: 'Required fields are empty.',
};
    
const validateAndSend = async (props, credentials) =>{
  
    if (credentials.password === "" || credentials.email === ""){
      props.dispatch({
        type: WARNING_NOTIFICATION,
        payload: {
          notification: {
            title: "Warning.",
            msg: validationErrorMessages.errorEmptyRequired,
          },
          show:true
        },
      });
    }else{
      await loginAction(credentials);
    }
  
};

function Login(props){
  const [login, setLogin]= useState({
    email: "",
    password: "",
  });

  const eventHandler = (ev) =>{
    setLogin({ ...login, [ev.target.name]: ev.target.value})
  };

  return (
    <div className='form-log-reg'>
      <label>
        * Email:
        <input
          className="input"
          type="text"
          name="email"
          required
          onChange={eventHandler}
        />
      </label>
      <label>
        * Password:
        <input
          className="input"
          type="password"
          name="password"
          required
          onChange={eventHandler}
        />
      </label>

      <div className="button-log-reg">
      <Button animate layer="success" className="button-login-size" onClick={async () => {
          try {
            await validateAndSend(props, login);
          } catch (err) {
            props.dispatch({
              type: ERROR_NOTIFICATION,
              payload: {
                notification: {
                  title: "Error.",
                  msg: err.message,
                },
                show: true,
              },
            });
          }
        }}
      >
        <KeyIcon className="verticalAlignIcons" />
        {" "}
        Login{" "}
      </Button>
      </div>
    </div>
  );
}

export default connect()(Login);
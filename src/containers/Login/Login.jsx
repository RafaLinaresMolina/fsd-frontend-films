import React, {useState} from 'react';
import './Login.scss';
import {connect} from 'react-redux';
import {getLoggedUser, loginAction} from '../../redux/actions/auth';
import {ERROR_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION} from '../../redux/types/notificationTypes';

const validationErrorMessages={
  errorEmptyRequired: 'Required fields are empty.',
};
    
const doLogin = async (user) =>{
  try{
    await loginAction(user);
  } catch(err) {
    throw err;
  }
};

const validateAndSend = async (props, object) =>{
  try{
    if (object.password === "" || object.email === ""){
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
      await doLogin(object);
    }
  }catch(err){
    props.dispatch({
      type: ERROR_NOTIFICATION,
      payload: {
        notification: {
          title: "Error.",
          msg: err.response.data.trace,
        },
        show: true,
      },
    });
    throw err;
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
    <div>
      <label>
        * Email:
        <input 
          type="text"
          name="email"
          required
          onChange={eventHandler}
          placeholder="some@mail.com"
        />
      </label>
      <label>
        * Password:
        <input
          type="password"
          name="password"
          required
          onChange={eventHandler}
          placeholder="password"
        />
      </label>
      <button onClick={async () => {
          try {
            await validateAndSend(props, login);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    errorNotification: state.notificationReducer.errorNotification,
    warningNotification: state.notificationReducer.warningNotification,
    successNotification: state.notificationReducer.successNotification,
    infoNotification: state.notificationReducer.infoNotification,
  };
};

export default connect(mapStateToProps)(Login);
/* import React, {useState} from 'react';
import './Login.scss';
import {connect} from 'react-redux';
import {getLoggedUser, login} from '../../redux/actions/auth';
import {useHistory} from 'react-router-dom';
import {ERROR_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION} from '../../redux/types';

const validationErrorMessages={
  errorEmptyRequired: 'Required fields are empty.',
};
    
const doLogin = async (login) =>{
  try{
    const resLogin = await login(user);

    const token = resLogin.data.token;
    const headers = {headers: {Authorization:  `Bearer ${token}`}};
    const resUser = await getLoggedUser(headers)

    const user={
      name: resUser.data.name,
      last_name: resUser.data.last_name,
      email: resUser.data.email,
      creditCard: resUser.data.creditCard,
      password: resUser.data.password,
      token: token,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
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
      return await doLogin(object);
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

  const history = useHistory();

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
            const data = await validateAndSend(props, login);
            if (data) {
              props.dispatch({
                type: SUCCESS_NOTIFICATION,
                payload: {
                  notification: {
                    title: "Correct credentials.",
                    msg: `Welcome ${data.name}.`,
                  },
                  show: true,
                },
              });
              setTimeout(() => {
                props.handleClose();
                props.dispatch({ type: LOGIN, payload: data });
                //history.push("/");
              }, 1500);
            }
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
    errorNotification: state.errorNotification,
    warningNotification: state.warningNotification,
    successNotification: state.successNotification,
    infoNotification: state.infoNotification,
  };
};

export default connect(mapStateToProps)(Login);
 */
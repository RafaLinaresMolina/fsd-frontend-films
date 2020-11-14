import "./App.css";
import React, { useEffect } from "react";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register'
import Login from './containers/Login/Login'
import Notification from "./components/Notification/Notification";
import 'antd/dist/antd.css'; 
import { READ_USER, LOGIN } from "./redux/types/userTypes";
import { connect } from "react-redux";
import DetectRol from "./components/DetectRol/DetectRol";
import { getLoggedUser } from "./redux/actions/auth";

function App(props) {
  useEffect(() => {
    try {
      console.log("hola1")
      const token = localStorage.getItem("authToken")
      console.log(token)
      if (token) {
        console.log("hola2")
        props.dispatch({ type: LOGIN, payload: token });
        const localUser = JSON.parse(localStorage.getItem("user"));
        if(!localUser){
        getLoggedUser(token).catch(error => console.log)
        }else{
          props.dispatch({ type: READ_USER, payload: localUser });
        }
        console.log("Hola3")
      }
    } catch (err) {
      console.log("hola4")
      getLoggedUser(props.token).catch(error => console.log)
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Notification></Notification>
          <BrowserRouter>
            <Switch>
              {!props.user?.email ? (
                <Route exact path="/">
                  <Home />
                </Route>
              ) : (
                  <Route exact path="/dashboard">
                    <DetectRol />
                  </Route>
                )}
              {props.user?.email ? (
                <Redirect to="/dashboard" />
              ) : (
                  <Redirect to="/" />
                )}
              <AdminTable />
            </Switch>
          </BrowserRouter>
        </Arwes>
      </ThemeProvider>

    </div>
  );
}
  const mapStateToProps = (state) => {
    return { user: state.userReducer.user, token: state.userReducer.token };
  };
  
  export default connect(mapStateToProps)(App);
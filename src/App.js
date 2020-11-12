import "./App.css";
import React, { useEffect } from "react";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import Home from './containers/Home/Home';
import 'antd/dist/antd.css'; 
import { READ_USER } from "./redux/types/userTypes";
import { connect } from "react-redux";
import DetectRol from "./components/DetectRol/DetectRol";

function App(props) {
  useEffect(() => {
    try {
      if (!props.user.email) {
        const localUser = JSON.parse(localStorage.getItem("user"));
        props.dispatch({ type: READ_USER, payload: localUser });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
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
    return { user: state.userReducer.user };
  };
  
  export default connect(mapStateToProps)(App);
import "./App.css";
import React, { useEffect } from "react";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import Home from './containers/Home/Home';
import Notification from "./components/Notification/Notification";
import 'antd/dist/antd.css'; 
import { LOGIN } from "./redux/types/userTypes";
import { connect } from "react-redux";
import DetectRol from "./components/DetectRol/DetectRol";
import SearchFilm from "./components/Search/SearchFilm";

function App(props) {
  useEffect(() => {
    try {
      if (!props.user?.token) {
        const localUser = JSON.parse(localStorage.getItem("user"));
        props.dispatch({ type: LOGIN, payload: localUser });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Notification />
          <BrowserRouter>
            <Switch>
              {!props.user?.token ? (
                <Route exact path="/">
                  <Home />
                </Route>
              ) : (
                  <Route exact path="/dashboard">
                    <SearchFilm></SearchFilm>
                    <DetectRol />
                  </Route>
                )}
              {props.user?.token ? (
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
    return { user: state.userReducer.user};
  };
  
  export default connect(mapStateToProps)(App);
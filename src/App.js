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
import BuscadorFilm from "./components/Buscador/BuscadorFilm";
import ResultadoFilm from "./components/Buscador/ResultadoFilm";

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
        <div className="col12 mt-4 border-top pt-3"></div>
        <BuscadorFilm/>
        <div ClassName="col-12">
          <ResultadoFilm/>
        </div>
    </div>
    
  );
}
  const mapStateToProps = (state) => {
    return { user: state.userReducer.user};
  };
  
  export default connect(mapStateToProps)(App);
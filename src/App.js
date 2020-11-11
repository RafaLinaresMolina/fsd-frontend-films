import "./App.css";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import Home from './containers/Home/Home';
import Notification from "./components/Notification/Notification";
import 'antd/dist/antd.css'; 

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Notification/>
          <Home />
          <AdminTable />
        </Arwes>
      </ThemeProvider>
    </div>
  );
}

export default App;

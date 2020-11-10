import "./App.css";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import Home from './containers/Home/Home';
import 'antd/dist/antd.css'; 

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <Home />
          <AdminTable />
        </Arwes>
      </ThemeProvider>
    </div>
  );
}

export default App;

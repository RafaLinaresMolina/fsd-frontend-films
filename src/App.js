import "./App.css";
import {Arwes, createTheme, ThemeProvider } from "arwes";
import AdminTable from './containers/AdminProfile/component/AdminTable';
import UserTable from './containers/UserProfile/component/UserTable';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <AdminTable />
          <UserTable />
        </Arwes>
      </ThemeProvider>
    </div>
  );
}

export default App;

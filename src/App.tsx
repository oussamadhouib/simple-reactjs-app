import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightThemeColors } from "./theme";
import Login from "./modules/Login/Login";
import Home from "./modules/Home/Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./commons/PublicRoute/PublicRoute";
import ViewUser from "./components/ViewUser/ViewUser";

function App() {
  return (
    <ThemeProvider theme={lightThemeColors}>
      <Router>
        <Switch>
          <PublicRoute path={"/login"} component={Login} />
          <PublicRoute exact path="/user/:id" component={ViewUser} />
          <PublicRoute path={"/"} component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

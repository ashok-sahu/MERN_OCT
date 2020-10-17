import React from "react";
import { Route, Switch } from "react-router-dom";
import { Landing, Login, Register,Activate } from "./pages/index";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    </Switch>
  );
}

export default App;

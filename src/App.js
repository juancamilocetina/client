import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./config/routes";


import './App.scss';



function App() {

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RutaConSubRutas key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RutaConSubRutas(route) {
  return (
    <Route 
      path = {route.path}
      exact = {route.exact}
      render = {props => <route.component routes={route.routes} {...props} />}
      />
  )
}

export default App;

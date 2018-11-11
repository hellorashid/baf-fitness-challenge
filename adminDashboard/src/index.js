import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.4.1";

import indexRoutes from "routes/index.jsx";
import LoginPage from "layouts/Auth/Auth.jsx"
import Dashboard from "layouts/Dashboard/Dashboard.jsx"
import Leaderboards from "views/Leaderboards/Leaderboards.jsx";
import TableList from "views/TableList/TableList.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

import fire from "./fire";

const hist = createBrowserHistory();

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}


class App extends React.Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render(){
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router history={hist}>
        <Switch>
          <Redirect from="/" exact to="/dashboard" />

          <Route exact path="/login" component={LoginPage}  />
          <PrivateRoute 
            exact path="/dashboard" 
            component={Dashboard} 
            authenticated={authenticated} />

             {/* <PrivateRoute 
          exact path="/leaderboards" 
          component={Leaderboards} 
          authenticated={authenticated} /> */}
        </Switch>
      </Router>
    )
  }
}


ReactDOM.render(
  // <Router history={hist}>
  //   <Switch>
  //     {/* {indexRoutes.map((prop, key) => {
  //       return <Route path={prop.path} component={prop.component} key={key} />;
  //     })} */}

  //     <Route exact path="/login" component={LoginPage} />
  //     <PrivateRoute exact path="/dashboard" component={Dashboard} authenticated={this.state.authenticated} />
  //   </Switch>
  // </Router>,
  <App />,
  document.getElementById("root")
);

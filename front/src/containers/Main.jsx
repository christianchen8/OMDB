import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import NavbarContainer from "./NavbarContainer";
import MovieContainer from "./MovieContainer";
import RegisterContainer from "./RegisterContainer";
import LoginContainer from "./LoginContainer";
import FavoritesContainer from "./FavoritesContainer";
import Footer from "../components/Footer";
import { stayLog } from "../action-creators/usuarios";

const mapDispatchToProps = (dispatch) => {
  return {
    stayLog: () => {
      dispatch(stayLog());
    },
  };
};

class Main extends React.Component {
  componentDidMount() {
    this.props.stayLog();
  }

  render() {
    return (
      <div
      style={{ backgroundColor: "black", width: "auto", height: "1680px" }}
      >
        <NavbarContainer/>
        <div>
          <Switch>
            <Route exact path="/movies" component={SearchContainer} />
            <Route path="/movies/:id" component={MovieContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/favorites" component={FavoritesContainer} />
            <Redirect from="/" to="/movies" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);

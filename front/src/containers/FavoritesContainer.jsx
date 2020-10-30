import React from "react";
import { allFavs, deleteFavs } from "../action-creators/favs";
import { connect } from "react-redux";
import Favorites from "../components/Favorites";

const mapStateToProps = function (state) {
  return {
    favs: state.favs,
    user: state.user
  };
};

const mapDispatchToProps = function (dispatch , ownProps) {
  return {
    allFavs: (id) => dispatch(allFavs(id)),
  };
};

class FavoritesContainer extends React.Component {
  constructor(props){
    super(props)

    this.handleDeleteFavs = this.handleDeleteFavs.bind(this);
  }

  componentDidMount() {
    this.props.allFavs(this.props.user.id); 
  }

  handleDeleteFavs(Title, Poster) {
    deleteFavs(Title, Poster, this.props.favs.id); 
    return this.props.history.push("/movies")
  }

  render() {
    return (
      <Favorites
      favs={this.props.favs}
      deleteFavs={this.handleDeleteFavs}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
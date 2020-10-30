import React from "react";
import { fetchSingleMovie } from "../action-creators/movies";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { addFavs } from "../action-creators/favs";

const mapStateToProps = function (state) {
  return {
    selectedMovie: state.movie,
    user: state.user.id
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  const idMovie= ownProps.match.params.id;
  return {
    fetchSingleMovie: (id) => dispatch(fetchSingleMovie(id)),
    idMovie
  };
};

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddFav = this.handleAddFav.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleMovie(this.props.idMovie)
  }


  handleAddFav(Title, Poster) {
    addFavs(Title, Poster, this.props.user); 
  }

  render() {
    return (
      <Movie
      movie={this.props.selectedMovie}
      handleAddFav={this.handleAddFav}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

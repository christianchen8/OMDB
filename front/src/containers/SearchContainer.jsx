import React from "react";
import { fetchMovies } from "../action-creators/movies";
import { connect } from "react-redux";
import Search from "../components/Search";

const mapStateToProps = function (state) {
  return {
    lista: state.lista.Search,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchMovies: (movie) => dispatch(fetchMovies(movie)),
  };
};

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <Search
      movies={this.props.lista}
      />
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

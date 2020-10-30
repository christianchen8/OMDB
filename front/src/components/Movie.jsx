import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Movie({ movie, handleAddFav }) {
  return (
    <div>
      <Container>
        <Row style={{ margin: "20px" }}>
          <Col xs={3} className="mb-5" key={movie.imdbID}>
            <hr />
            <hr />
            <Card className=" shadow-sm bg-white rounded">
              <Card.Img variant="top" src={movie.Poster} />
            </Card>
          </Col>

          <Col key={movie.imdbID}>
            <span style={{ color: "white" }}>
              <ul>
                <hr />
                <hr />
                <strong style={{ color: "#ffc107" }}> Title: </strong>{" "}
                {movie.Title}
                <br />
                <br />
                {movie.Plot}
                <br /> <br />
                <strong style={{ color: "#ffc107" }}> Year: </strong>
                {movie.Year}
                <br />
                <strong style={{ color: "#ffc107" }}> Genre: </strong>
                {movie.Genre}
                <br />
                <strong style={{ color: "#ffc107" }}> Director: </strong>
                {movie.Director} <br />
                <strong style={{ color: "#ffc107" }}> Actors: </strong>
                {movie.Actors}
                <br />
                <strong style={{ color: "#ffc107" }}> Writer: </strong>
                {movie.Writer}
                <br />
                <hr />
              </ul>
            </span>
            <Link to={"/movie"}>
              <span>
                <Button
                  className="mt-auto d-flex justify-content-center font-weight-bold "
                  variant="warning"
                  style={{ marginLeft: "50px", marginTop: "100px" }}
                >
                  Back Home
                </Button>
              </span>
            </Link>
            <hr />
            <span>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddFav(movie.Title, movie.Poster);
                }}
                className="mt-auto d-flex justify-content-center font-weight-bold "
                variant="warning"
                style={{ marginLeft: "50px", marginTop: "100px" }}
              >
                Add Fav
              </Button>

            </span>
            <hr />
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

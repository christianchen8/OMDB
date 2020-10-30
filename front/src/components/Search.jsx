import React from "react";
import { Card, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Search({ movies }) {
  return (
    <div >
      <Container>
        <Row style={{ margin: "20px" }}>
          {movies ? (
            movies.map((movie) => (
              <Col xs={3} className="mb-5" key={movie.imdbID}>
                <Card className="h-100 shadow-sm bg-white rounded">
                  <Card.Img variant="top" src={movie.Poster} />

                  <Card.Body className="d-flex w-150 flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                      <Card.Title className="mb-0 font-weight-bold ">
                        {movie.Title}
                      </Card.Title>
                    </div>

                    <Link to={`/movies/${movie.imdbID}`}>
                      <Button
                        className="mt-auto font-weight-bold "
                        variant="warning"
                        block
                      >
                        More Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
                  <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Movie not found</Alert.Heading>
                    <p>
                      The movie or serie that you are searching for is not in our data base.
                    </p>
                  </Alert>
          )}
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Favorites({ favs, deleteFavs}) {
  return (
    <div >
      <Container>
        <Row style={{ margin: "20px" }}>
          {
            favs.map((fav) => (
              <Col xs={3} className="mb-5" key={fav.imdbID}>
                <Card className="h-100 shadow-sm bg-white rounded">
                  <Card.Img variant="top" src={fav.Poster} />

                  <Card.Body className="d-flex w-150 flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                      <Card.Title className="mb-0 font-weight-bold ">
                        {fav.Title}
                      </Card.Title>
                    </div>

                  
                      <Button
                        className="mt-auto font-weight-bold "
                        variant="warning"
                        block
                        onClick={(e) => {
                          e.preventDefault();
                          deleteFavs(fav.id);
                        }}
                      >
                        Delete
                      </Button>

                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserOutlined, UserAddOutlined, HomeOutlined } from "@ant-design/icons";

export default ({ handleSubmit, handleChange, value, user, handleLogout }) => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="text-warning">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Nav className="mr-auto">
        
      

      {user ? ( // Dropdown con Usuario Registrado -- deberia de poner en title en vez de 'Mi cuenta' -> nombre de usuario.
        <Nav className="text-warning">
          <NavDropdown
            title="Mi cuenta"
            id="basic-nav-dropdown"
            className="text-warning"
          >
            <NavDropdown.Item> Series </NavDropdown.Item>

            <NavDropdown.Item> Movie </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/favorites">Favoritos</Link>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>
              <p onClick={handleLogout}> Log Out </p>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        // Login y Register
        <Nav>
          <Nav.Link className="text-warning">
            <Link to={"/login"} className="text-warning">
              Log In
              <UserOutlined style={{ fontSize: "25px" }} />
            </Link>
          </Nav.Link>

          <Nav.Link className="text-warning">
            <Link to={"/register"} className="text-warning ">
              Register
              <UserAddOutlined style={{ fontSize: "25px" }} />
            </Link>
          </Nav.Link>
        </Nav>
      )}
      </Nav>
      <Nav.Link>
          <Link to={"/movie"} className="text-warning">
            <HomeOutlined style={{ fontSize: "25px" }} />
          </Link>
        </Nav.Link>

      <Form onSubmit={handleSubmit} inline>
        <FormControl
          type="text"
          placeholder="Search Movie"
          className="mr-sm-3 "
          onChange={handleChange}
          value={value}
        />
        <Button type="submit" variant="warning">
          Search
        </Button>
      </Form>
    </Navbar>
  </div>
);

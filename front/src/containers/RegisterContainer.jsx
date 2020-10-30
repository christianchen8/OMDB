import React from "react";
import { createUser } from "../action-creators/usuarios"; 
import { connect } from "react-redux";
import Register from "../components/Register";

const mapDispachToProps = (dispatch) => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password))
  };
};

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        email: '',
        password: '',
        error: '',
      };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.email){
      return this.setState({error: "INGRESE EMAIL CORRECTO"})
    }
    if(!this.state.password){
      return this.setState({error: "INGRESE PASSWORD CORRECTO"})
    }
    this.props.createUser(this.state.email, this.state.password);
    return this.props.history.push("/login")
  }

  handleEmail(e){
    console.log('-----handleEmail-----',this.state.email)
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    console.log('----handlePassword----',this.state.password)
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <Register
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    )
  }
}

export default connect(null, mapDispachToProps)(RegisterContainer);
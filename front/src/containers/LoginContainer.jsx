import React from "react";
import { loginUser } from "../action-creators/usuarios"; 
import { connect } from "react-redux";
import Login from "../components/Login";

const mapDispachToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

class LoginContainer extends React.Component {
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
    this.props.loginUser(this.state.email, this.state.password);
    return this.props.history.push("/movies")
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
      <Login
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    )
  }
}

export default connect(null, mapDispachToProps)(LoginContainer);
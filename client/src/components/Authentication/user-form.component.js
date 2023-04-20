import React, { Component, useState } from "react";
import "../App.css"
import Header from "../Header";
import Footer from "../Footer";
import Button from "../smallComponents/Button";
import Axios from 'axios'




const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  );

  const formValid = ({ isError, ...rest }) => {
    let isValid = false;
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });
    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });
    return isValid;
};

const register = (usernameReg, emailReg, passwordReg) => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      window.location.href = "/login";
    });
  };
  

export default class UserForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!")
        if (formValid(this.state)) {
          register(
            this.state.usernameReg,
            this.state.emailReg,
            this.state.passwordReg
          );
          alert("Thank you for signing up!")
          window.location.href = "/login";
        } else {
          console.log("Form is invalid!");
        }
      };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })
    };

    handleNameInputChange = (e) => {
        this.formValChange(e);
        this.setState({ usernameReg: e.target.value });
      };
    
      handleEmailInputChange = (e) => {
        this.formValChange(e);
        this.setState({ emailReg: e.target.value });
      };
    
      handlePasswordInputChange = (e) => {
        this.formValChange(e);
        this.setState({ passwordReg: e.target.value });
      };

   

    
    render() { /*
        const regExp = RegExp(
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        )*/

        const { isError } = this.state;

        return (
            <> 
            <Header  isLine={true}/> 
            <div id="container"> 
                <div id="formContainer"> 
                <form onSubmit={this.onSubmit} noValidate>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.handleNameInputChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.handleEmailInputChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.handlePasswordInputChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                <div id="buttonContainer2"> 
                    <Button type="submit" title="Submit" onClick={this.onSubmit} />
                </div>
            </form>
            </div>
           </div>
        <Footer  isLine={true}/>
        </>
        );
    }
}
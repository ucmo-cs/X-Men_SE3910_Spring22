import "./Login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Alert } from "react-bootstrap";

export default function Login({ setToken, getToken }) {
  const navigate = useNavigate();

  const [showAlert, setAlert] = useState(false);
  const [user, setUser] = useState(
    {
      name: '',
      password: ''
    }

  );


  function validateForm() {
    return user.name.length > 0 && user.password.length > 0;
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch('http://localhost:8080/jpa/login', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user),
      credentials: 'same-origin',

    }).then((res) => {
      console.log(res)
      return res.json();

    }).then((res) => {
      console.log(res);
      setToken(res);

      //window.location.href="/home"
      navigate('/home', { state: { name: user.name } });
      navigate(0);

    }).catch((error) => {
      console.log(error);
      setAlert(true);
    });

  }

  const changeValue = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value
    });

  }

  return (
    <div>
      <Header isLoggedIn={false} user={null} />

      <div className="Login">

        <div className="title">
          <h1>Open Source Project Tracking System</h1>
        </div>

        <div className="formBackground">
          <h3>Sign In</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="name"

                onChange={changeValue}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={changeValue}
              />
            </Form.Group>

            <Alert className="loginAlert" show={showAlert} variant='danger' onClose={() => setAlert(false)} dismissible>
              <Alert.Heading className="loginAlertHeading">Username or Password is Incorrect</Alert.Heading>
            </Alert>

            <Button variant="success" size="lg" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

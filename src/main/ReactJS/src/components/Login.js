import "./Login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header";

export default function Login({setToken}) {

  const [user, setUser] = useState(
    {
      name:'',
      password:''
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
        'Accept': 'application/json' },
      body: JSON.stringify(user),
      credentials : 'same-origin',
      }).then((res) => {
        console.log(res)     
        return res.json(); 
      }).then((res) =>{
        console.log(res);
        setToken(res);
        window.location.href="/home";
      });

  }


  const changeValue=(e)=>{
    console.log(e);
    setUser({
      ...user, [e.target.name]:e.target.value
    });

  }

  return (
<div>
    <Header isLoggedIn={true}/>
    <div className="Login">
      
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
        <Button variant="success" block size="lg" type="submit" disabled={!validateForm()} onClick={!handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
    </div>
  );
}

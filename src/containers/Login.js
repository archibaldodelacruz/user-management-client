import React, { useState , useContext } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {  AppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myUserInfo,setMyUserInfo] = useContext(AppContext);
  const history = useHistory();


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  //submit callback function
  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      "http://localhost:8080/v1/fun/persons/autenticate?username=" +
        username +
        "&password=" +
        password
    )
      .then((res) => res.json())
      .then(
        (data) => {
          //actualizar componentes
          //userHasAuthenticated(true);
          setMyUserInfo(data);
            history.push('/accountinfo')
          },
        (error) => {
          alert("Nombre de usuario o contrasena incorrecta.");
        }
      )
      .catch(console.log);
  }

  return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
  <ControlLabel>Username: {myUserInfo.nombre}</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
  );
};

export default Login;

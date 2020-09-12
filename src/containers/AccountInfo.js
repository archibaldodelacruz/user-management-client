import React, { useContext } from "react";
import "./AccountInfo.css";
import {  AppContext } from "../libs/contextLib";
import { Table } from "react-bootstrap";


export default () => {

const [userInfo] = useContext(AppContext);

return (
    
  <Table bordered hover >
  <tbody>
    <tr>
      <td>Username:</td>
      <td>{userInfo.username}</td>
    </tr>
    <tr>
     <td>Nombre:</td>
      <td>{userInfo.nombre}</td>    
    </tr>
    <tr>
    <td>Apellido:</td>
    <td>{userInfo.apellido}</td>
    </tr>
    <tr>
    <td>Edad:</td>
    <td>{userInfo.edad}</td>
    </tr>
    <tr>
    <td>Sexo:</td>
    <td>{userInfo.genero}</td>
    </tr>
    
  </tbody>
</Table>
  
  
  );
};


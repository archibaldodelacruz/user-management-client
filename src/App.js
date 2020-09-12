import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Link, useHistory } from "react-router-dom";



import Routes from "./Routes";

import "./App.css";

const App = () => {
  
  //const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});

  function handleLogout() {
//    userHasAuthenticated(false);
    setUserInfo({});
    history.push("/login");
  }

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">MANAGEMENT 3.0</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { userInfo.id ? (
              <>
                <LinkContainer to="/accountinfo">
                  <NavItem>Account Info</NavItem>
                </LinkContainer>
                <NavItem onClick={handleLogout}>Logout</NavItem>
            </>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={[userInfo,setUserInfo]}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
};

export default App;

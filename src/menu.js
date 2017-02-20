import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Cases</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/login.html">Inbox</NavItem>
      <NavDropdown eventKey={3} title="Analysis" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Generate Reports</MenuItem>
        <MenuItem eventKey={3.2}>Statistics</MenuItem>
        <MenuItem eventKey={3.3}>Case suggestions</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>keepin' it real</MenuItem>
      </NavDropdown>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
      </Navbar.Text>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance, document.getElementById("menu"));

import React,  {Component} from 'react';
import {Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {MDBIcon } from "mdbreact";

export default class Navbarb extends Component {
  render() {
	    return (
		  <div>
		    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			  <Navbar.Brand href="/">
			    <MDBIcon icon="home" />
			    {' '}Izometrijski proračuni
			  </Navbar.Brand>

			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
			      <Link to="/Components/Volumen" className="nav-link">
			        
			        {' '}Zapremnina
			      </Link>

			      <NavDropdown title="Težina" id="collasible-nav-dropdown">
			       
			        <NavDropdown.Item 
			          href="/Components/Forme/TezKru">
			          <MDBIcon icon="hockey-puck" />
			          {' '}Okrugla čelična ploča
			        </NavDropdown.Item>

			        <NavDropdown.Item 
			          href="/Components/Forme/TezKva">
			          <MDBIcon icon="layer-group" />
			          {' '}Pravokutna čelična ploča
			        </NavDropdown.Item>
			        
			        <NavDropdown.Item 
			          href="/Components/Forme/TezCjev">
			          <MDBIcon far icon="circle" />
			          {' '}Okrugla cjev  			          
			        </NavDropdown.Item>

			        <NavDropdown.Item 
			          href="/Components/Forme/TezPravokutneCjevi">
			          <MDBIcon far icon="square" />
			          {' '}Pravokutna cjev			          
			        </NavDropdown.Item>

			        <NavDropdown.Item 
			          href="/Components/Forme/OkrugliProfil">
			          <MDBIcon icon="circle" />
			          {' '}Okrugli puni profil			          
			        </NavDropdown.Item>

			        <NavDropdown.Item 
			          href="/Components/Forme/PravokutniProfil">
			          <MDBIcon icon="square" />
			          {' '}Pravokutni puni profil			          
			        </NavDropdown.Item>
			        			        
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="/Components/Forme/TablicaMaterijala">
			          <MDBIcon icon="clipboard-list" />
			          {' '}Tablica gustoće materijala
			        </NavDropdown.Item>
			      </NavDropdown>
			      <Link to="/Components/Izometrija" className="nav-link">Izometrija</Link>
			    </Nav>   

			  </Navbar.Collapse>
			</Navbar>
		  </div>
	   	);
	 	}
	}



import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Media from 'react-media';

import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import { IoMdHome } from 'react-icons/io';

import logo from '../aeo.png'

class Home extends React.Component {

  render() {
  	return (
			<div className="test">

				<Media query="(max-width: 767px)">
					<Navbar className="navbar">
						<Navbar.Brand>
							<Image src={logo} alt="aeo" className="logo"/>
						</Navbar.Brand>
					</Navbar>
				</Media>

				<Media query="(min-width: 768px)">
					<Navbar bg="dark" variant="dark" className="navbar">
						<Navbar.Brand className="col-4">
							<Image src={logo} alt="aeo" className="logo"/>
						</Navbar.Brand>
						<Nav className="mr-auto">
							<ul>
								<li><Nav.Link href="#home"><IoMdHome /></Nav.Link></li>
								<li><Nav.Link href="#presentation">Présentation</Nav.Link></li>
								<li><Nav.Link href="#services">Service</Nav.Link></li>
								<li><Nav.Link href="#contact">Contact</Nav.Link></li>
							</ul>
						</Nav>
					</Navbar>
				</Media>

			</div>
		)
  }
}

export default Home;

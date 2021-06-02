import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";

/****REACT FONT AWESOME IMPORTS******/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img className="logo" src={logo} alt="logo"></img>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link smooth={true} to="home" className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="about" className="nav-link" href="#">
								About Me
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="education" className="nav-link" href="#">
								Education
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="Experience" className="nav-link" href="#">
								Experience
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="portfolio" className="nav-link" href="#">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link smooth={true} to="Contact" className="nav-link" href="#">
								Contact Me!
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React from "react";
import "./Header.css";
const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#dashboard">Dashboard</a>
					</li>
					<li>
						<a href="#profile">Profile</a>
					</li>
					<li>
						<a href="#login">Login</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

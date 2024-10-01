import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
					<li>
						<Link to="dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="users">Users</Link>
					</li>
					<li>
						<Link to="login">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

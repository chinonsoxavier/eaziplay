import React from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="navbar">
				<div className="nav__links">
					<img alt="logo" src={logo} />

					<nav className="nav">
						<ul className="links">
							<li className="link">Individual</li>
							<li className="link">Business</li>
							<li className="link">Pricing</li>
							<li className="link">Set your payroll</li>
						</ul>
					</nav>
				</div>

				<div className="buttons">
					<Button text={"Log in"} color={"transparent"} />

					<Button text={"Register"} color={"primary"} />
				</div>
			</div>
		</header>
	);
}

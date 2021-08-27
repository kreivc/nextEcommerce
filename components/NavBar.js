import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
	const router = useRouter();
	const isActive = (r) => {
		if (r === router.pathname) {
			return " active";
		} else {
			return "";
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link href="/">
					<a className="navbar-brand">Kreivc</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavDropdown"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/cart">
								<a
									className={"nav-link" + isActive("/cart")}
									aria-current="page"
									href="#"
								>
									<i
										className="fas fa-shopping-cart"
										aria-hidden="true"
									></i>
									Cart
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/signin">
								<a
									className={"nav-link" + isActive("/signin")}
									aria-current="page"
									href="#"
								>
									<i
										className="fas fa-user"
										aria-hidden="true"
									></i>
									Sign In
								</a>
							</Link>
						</li>

						{/* <li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								User Name
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<li>
									<a className="dropdown-item" href="#">
										Profile
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Logout
									</a>
								</li>
							</ul>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;

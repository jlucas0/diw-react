import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  	return (
	  	<>
			<header>
				<nav>
					<ul>
						<li><Link to="/">Inicio</Link></li>
						<li><Link to="/articulos">Artículos</Link></li>
					</ul>
				</nav>
				<h1>TeleArmero</h1>
			</header>
			<Outlet />
			<footer>
				<p>&copy; 2023 TeleArmero</p>
			</footer>
		</>
	)
};

export default Layout;
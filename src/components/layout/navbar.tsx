import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav>
			<h1>Navbar</h1>
			<Link to={"/"}>Home</Link>
			<Link to={"/gameinfo"}>Game Information</Link>
			<Link to={"/about"}>About</Link>
		</nav>
	);
};

import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

const Layout = () => {
	return (
		<div className="tw-w-screen tw-h-screen tw-bg-gray-300 tw-flex tw-flex-col">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Layout;

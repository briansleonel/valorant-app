import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

const Layout = () => {
	return (
		<div className="tw-w-screen tw-min-h-screen tw-m-0 tw-p-0 tw-bg-gray-300">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Layout;

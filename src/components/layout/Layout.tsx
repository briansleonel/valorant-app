import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const Layout = () => {
    return (
        <div className="tw-w-full tw-h-screen tw-bg-gray-300 tw-flex tw-flex-col">
            <Navbar />
            <Outlet />
            {/*pathname !== "/" && pathname !== "/maps" && show ? <Footer /> : ""*/}
        </div>
    );
};

export default Layout;

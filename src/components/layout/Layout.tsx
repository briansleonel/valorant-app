import { Outlet } from "react-router-dom"
import { NavBar } from "./navbar"

export const Layout = () => {
    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
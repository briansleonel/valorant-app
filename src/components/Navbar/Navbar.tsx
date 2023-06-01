import {
    LinkTo,
    MobileIcon,
    Nav,
    NavLogo,
    NavMenu,
    NavMenuMobile,
} from "./navbar.elements";

import logoValorant from "../../assets/img/valorant-logo.png";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { navigationApp } from "../../config/navigation/navigation";

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Nav>
            <NavLogo to="/">
                <img src={logoValorant} alt="" />
                <p className="font-valorant">vALORaNT-AAP</p>
            </NavLogo>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <XMarkIcon /> : <Bars3Icon />}
            </MobileIcon>

            <NavMenu>
                {navigationApp.map((link) => (
                    <LinkTo
                        key={link.href}
                        to={link.href}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        {link.name}
                    </LinkTo>
                ))}
            </NavMenu>

            <NavMenuMobile open={showMobileMenu}>
                {navigationApp.map((link) => (
                    <LinkTo
                        key={link.href}
                        to={link.href}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        {link.name}
                    </LinkTo>
                ))}
            </NavMenuMobile>
        </Nav>
    );
};

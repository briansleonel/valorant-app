import { ReactElement } from "react";
import {
    Github,
    Linkedin,
    Instagram,
    EnvelopeFill,
} from "react-bootstrap-icons";

interface ISocialNetworks {
    href: string;
    icon: ReactElement;
    name: string;
}

export const socialNetworks: Array<ISocialNetworks> = [
    {
        name: "Github",
        href: "https://github.com/briansleonel",
        icon: <Github />,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/briansleonel/",
        icon: <Linkedin />,
    },
    {
        name: "Gmail",
        href: "mailto:gonzalezbrianleonel76@gmail.com?Subject=ValorantApp",
        icon: <EnvelopeFill />,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/briansleonel/",
        icon: <Instagram />,
    },
];

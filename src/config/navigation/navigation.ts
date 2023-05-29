import { ILink } from "../../types/navbar";

export const navigationApp: Array<ILink> = [
    {
        name: "Inicio",
        href: "/",
        current: true,
        subLinks: [],
    },
    {
        name: "Información del juego",
        href: "$gameinfo",
        current: false,
        subLinks: [
            {
                name: "Agentes",
                href: "/agents",
                current: false,
                subLinks: [],
            },
            {
                name: "Armas",
                href: "/weapons",
                current: false,
                subLinks: [],
            },
            {
                name: "Mapas",
                href: "/maps",
                current: false,
                subLinks: [],
            },
            {
                name: "Modos de Juego",
                href: "/gamemodes",
                current: false,
                subLinks: [],
            },
        ],
    },
    {
        name: "Acerca de",
        href: "/about",
        current: false,
        subLinks: [],
    },
];

import { ILink } from "../../types/navbar";

export const navigationApp: Array<ILink> = [
    {
        name: "Inicio",
        href: "/",
        current: true,
        subLinks: [],
    },
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
];

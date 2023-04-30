import { ILink } from "../../types/navbar";

export const navigationApp: Array<ILink> = [
	{
		name: "Home",
		href: "/",
		current: true,
		subLinks: [],
	},
	{
		name: "Game Information",
		href: "/gameinfo",
		current: false,
		subLinks: [
			{
				name: "Agents",
				href: "/agents",
				current: false,
				subLinks: [],
			},
			{
				name: "Game Modes",
				href: "/gamemodes",
				current: false,
				subLinks: [],
			},
			{
				name: "Maps",
				href: "/maps",
				current: false,
				subLinks: [],
			},
		],
	},
	{
		name: "About",
		href: "/about",
		current: false,
		subLinks: [],
	},
];
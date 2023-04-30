export interface ILink {
    name: string;
    href: string;
    current: boolean;
    subLinks: Array<ILink>;
}

export type MenuItemProps = {
    title: string,
    link: string,
}

export type HeaderProps = {
    logoURL:string,
    menuItems: MenuItemProps[],
}
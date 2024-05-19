export type MenuItemProps = {
    title: string,
    link: string,
}

export type RoleBtnsProps = {
    title: string,
}

export type HeaderProps = {
    logoURL:string,
    menuItems: MenuItemProps[],
    roleBtns: RoleBtnsProps[],
}
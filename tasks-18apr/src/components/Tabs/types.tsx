import { ReactNode } from "react"

export type TabsItemProps = {
    title: string,
    content: ReactNode,
}

export type TabsProps = {
    tabsContent: TabsItemProps[],
}
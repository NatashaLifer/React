import { FC, useEffect } from "react"
import { useLocalStorage } from ".."

type Route = {
    path: string
    component: React.ComponentType
}
  
type RouterProp = {
    routesList: Route[]
}

export const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
}

const Router:FC<RouterProp> = ({routesList}) => {
    const [currentRoute, setCurrentRoute] = useLocalStorage (
        'route',
        window.location.pathname
    )

    const Component = routesList.find(route => route.path === currentRoute)?.component

    useEffect(() => {
        const handlePopState = () => {
            setCurrentRoute(window.location.pathname)
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [setCurrentRoute])
   
    return Component ? (
        <Component/>
    ) : (
        <h1> Сторінки з таким шляхом не існує</h1>
    )
}

export default Router


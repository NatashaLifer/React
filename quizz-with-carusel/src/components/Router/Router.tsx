import { FC } from "react"

type Route = {
    path: string
    component: React.ComponentType
}
  
type RouterProp = {
    routesList: Route[]
    // routesList: Array<Route> 
}

export const navigate = (path: string) => {
    window.history.pushState({}, '', path)
}

const Router:FC<RouterProp> = ({routesList}) => {
    const path = window.location.pathname
    const Component = routesList.find(route => route.path === path)?.component
   
    return Component ? (
        <Component/>
    ) : (
        <h1> Сторінки з таким шляхом не існує</h1>
    )
}
  
// const Router:FC<RouterProp> = ({routesList}) => {
//     const [currentRoute, setCurrentRoute] = useState<string>('/')
//     const activeRoute = routesList.find(route => route.path === currentRoute)
//     const SingleRoute = activeRoute?.component
  
//     const handleRouteChange = (route:string) => {
//       if(!routesList.find(route => route.path === route)) throw new Error('route not found')
  
//       window.history.pushState({}, '', route) //міняємо адресу в браузері
//       setCurrentRoute(route)
//     }
  
//     return <SingleRoute isCurentRoute={true} navigate={handleRouteChange}/>
// }

export default Router


import { Users, Sessions } from "../pages/admin" 
import { ADMIN_ROUTES } from "./routes.names"

export default [
    {
        path: ADMIN_ROUTES.USERS,
        element: <Users />
    },
    {
        path: ADMIN_ROUTES.SESSIONS,
        element: <Sessions />
    },
    
]
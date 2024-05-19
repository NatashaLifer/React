import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageTemplate from '../template/PageTemplate'
import commonRouter from './common.router'
import userRouter from './user.router'
import adminRouter from './admin.router'
import { COMMON_ROUTES } from './routes.names'
import { ROLES } from '../roles/types'
import { NotFound }  from '../pages/common'

const getRouterByRole = (role: ROLES) => {
    switch (role) {
        case ROLES.GUEST: 
            return commonRouter
        case ROLES.USER: 
            return [...commonRouter, ...userRouter]
        case ROLES.ADMIN: 
            return [...commonRouter, ...adminRouter]
        default: 
            return []
    }
}

const MyAppRouter = () => {
    const role = ROLES.USER
    
    const router = createBrowserRouter([
        {
            path: COMMON_ROUTES.HOME, 
            element: <PageTemplate role={role}/>,
            errorElement: <NotFound/>,
            children: getRouterByRole(role),
        }
    ])

    return <RouterProvider router={router}/>
}

export default MyAppRouter
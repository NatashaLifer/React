import { Home, Login, Register, Products } from "../pages/common" 
import { COMMON_ROUTES } from "./routes.names"

export default [
    {
        index: true,
        element: <Home />
    },
    {
        path: COMMON_ROUTES.LOGIN,
        element: <Login />
    },
    { 
        path: COMMON_ROUTES.REGISTER,
        element: <Register />
    },
    {
        path: COMMON_ROUTES.PRODUCTS,
        element: <Products />,
        loader: async () => 
            fetch('./catalog.json').then(res => res.json())
    },
]
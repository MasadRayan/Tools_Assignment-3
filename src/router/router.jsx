import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homepage from "../Pages/Home/Homepage";
import AllDishesPage from "../Pages/Dishes/AllDishesPage";
import DishDetails from "../Pages/Dishes/DishDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: '/dishes',
                Component: AllDishesPage,
            },
            {
                path: '/dishes/:id',
                element: <PrivateRoute>
                    <DishDetails></DishDetails>
                </PrivateRoute>
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])
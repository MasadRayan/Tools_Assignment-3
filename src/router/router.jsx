import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homepage from "../Pages/Home/Homepage";
import AllDishesPage from "../Pages/Dishes/AllDishesPage";
import DishDetails from "../Pages/Dishes/DishDetails";
import Login from "../Pages/Login/Login";

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
                Component: DishDetails
            },
            {
                path: '/login',
                Component: Login,
            }
            
        ]
    }
])
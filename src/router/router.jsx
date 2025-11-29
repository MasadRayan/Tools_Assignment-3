import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homepage from "../Pages/Home/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Homepage
            }
        ]
    }
])
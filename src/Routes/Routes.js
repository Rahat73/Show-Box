import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('https://api.tvmaze.com/search/shows?q=all')
            },
            {
                path: '/showDetails/:id',
                element: <ShowDetails></ShowDetails>,
                loader: async ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
            }
        ]
    }
]);

export default router;
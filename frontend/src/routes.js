import { Navigate } from "react-router-dom";
import Interface from "./component/Interface"
import Home from "./pages/Home";

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app" /> },
    {
        path: "/app", element: <Interface />, children: [
            { index: true, element: <Home /> },
        ]
    },
];

export default MAP_ROUTES;
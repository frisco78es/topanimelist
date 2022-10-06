import { Navigate } from "react-router-dom";
import Interface from "./component/Interface"

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app" /> },
    {
        path: "/app", element: <Interface />, children: [
            { index: true, element: <Navigate to="/app" /> },
        ]
    },
];

export default MAP_ROUTES;
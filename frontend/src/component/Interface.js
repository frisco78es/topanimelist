import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

function Interface(props) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", ml: "200px", mr: "200px" }}>
            <Outlet />
        </Box>
    )
}

export default Interface;
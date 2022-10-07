import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function Home() {
    const [listName, setListName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setListName(event.target.value)
    }

    const handleClick = () => {
        if (listName) {
            console.log(listName)
            setLoading(true)
        }
    }

    return (
        <>
            <TextField id="list-name" label="List Name" variant="filled" value={listName} onChange={handleChange} />
            {!loading &&
                <Button variant="outlined" onClick={handleClick}>
                    Download list
                </Button>
            }
            {loading && <Typography>Loading {listName}'s list</Typography>}
        </>
    )
}
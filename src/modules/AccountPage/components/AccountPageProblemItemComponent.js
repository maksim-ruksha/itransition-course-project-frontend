import React from "react";
import {ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";

export default function AccountPageProblemItemComponent({title}) {
    return (<ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={title}/>
            </ListItemButton>
        </ListItem>);
}

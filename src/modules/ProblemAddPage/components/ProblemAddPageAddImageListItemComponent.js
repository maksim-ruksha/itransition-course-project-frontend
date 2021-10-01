import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {Button} from "@mui/material";
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPageAddImageListItemComponent({onImageFieldChange}) {
    const classes = useStyles();
    return (
        <Button
            variant="outlined"
            className={classes.imageAddButton}
            component="label"
        >
            <input
                accept="image/*"
                type="file"
                onChange={onImageFieldChange}
                hidden/>
            <AddIcon/>
        </Button>
    );
}
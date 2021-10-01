import React from "react";
import {useStyles} from "./ProblemAddPageStyles";
import {Button, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProblemAddPageImageListItemComponent({image, alt}) {
    const classes = useStyles();
    return (
        <Button
            variant="outlined"
            className={classes.imageAddButton}
            component="label"
        >

            <Paper variant="outlined">
                <img src={image} className={classes.imageRemoveButton} alt={alt}/>
            </Paper>
            <DeleteIcon/>
        </Button>
    );
}
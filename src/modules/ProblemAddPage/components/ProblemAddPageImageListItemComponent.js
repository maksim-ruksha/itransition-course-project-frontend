import React from "react";
import {useStyles} from "./ProblemAddPageStyles";
import {Button, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProblemAddPageImageListItemComponent({image, alt}) {
    const classes = useStyles();
    return (
        <div>
            <img src={image} className={classes.image} alt={alt}/>
        </div>
    );
}

/*
<Button
    variant="outlined"
    className={classes.imageAddButton}
    component="label"
>
    <img src={image} className={classes.imageRemoveButton} alt={alt}/>
    <DeleteIcon/>
</Button>*/

import React from "react";
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Button} from "@mui/material";
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPageAddImageListItemComponent({onImageFieldChange, highlight, onImageDragEnter, onImageDragOver, onImageDragLeave, onImageDragDrop}) {
    const classes = useStyles();
    return (
        <Button
            variant={highlight ? "contained" : "outlined"}
            className={classes.imageAddButton}
            component="label"
            onDragEnter={onImageDragEnter}
            onDragOver={onImageDragOver}
            onDragLeave={onImageDragLeave}
            onDrop={onImageDragDrop}
        >
                <input
                    accept="image/*"
                    type="file"
                    onChange={onImageFieldChange}
                    hidden/>
            {highlight ? <FileUploadIcon/> : <AddIcon/>}
        </Button>
    );
}
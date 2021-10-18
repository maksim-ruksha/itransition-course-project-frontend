import React from "react";
import {useStyles} from "./ProblemAddPageStyles";
import {Button} from "@mui/material";
import {useTranslation} from "react-multi-lang";

export default function ProblemAddPageImageListItemComponent({image, alt, onRemoveImageClick, componentId}) {
    const classes = useStyles();
    const t = useTranslation("problem-add-page");
    return (
        <div>
            <div>
                <img src={image} className={classes.image} alt={alt}/>
            </div>
            <div className={classes.imageRemoveButton}>
                <Button
                    id={componentId}
                    variant="outlined"
                    onClick={onRemoveImageClick}
                >
                    {t("remove-image")}
                </Button>
            </div>
        </div>
    )
        ;
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

import React from "react";
import {Button, TextField} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPageSolutionVariantItemComponent({
                                                                       solution,
                                                                       onSolutionChange,
                                                                       onSolutionRemoveClick,
                                                                       componentId
                                                                   }) {
    const t = useTranslation("problem-add-page");
    const classes = useStyles();
    return <div>
        <TextField
            id={componentId}
            className={classes.solutionVariantTextField}
            onChange={onSolutionChange}
        >
            {solution}
        </TextField>
        <Button
            id={componentId}
            onClick={onSolutionRemoveClick}
            variant="outlined"
        >
            {t("remove-solution")}
        </Button>
    </div>
}
import React from "react";
import {Chip, Stack, TextField} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPageTagsComponent({tags, onTagsChange}) {
    const classes = useStyles();
    const t = useTranslation("problem-add-page");
    const chips = tags.map(tag => (
        <Chip
            className={classes.tagChip}
            label={tag}/>
    ));
    return <div>
        <TextField
            onChange={onTagsChange}
            label={t("tags")}/>
        <div>
            {chips}
        </div>
    </div>
}
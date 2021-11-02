import React from "react";
import {Chip, TextField} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPageTagsComponent({tags, onTagsChange, processingPublication}) {
    const classes = useStyles();
    const t = useTranslation("problem-add-page");
    const chips = tags.map((tag, index) => (tag !== "" ?
        <Chip
            key={index}
            className={classes.tagChip}
            label={tag}/> : <div key={index}/>
    ));
    return <div>
        <TextField
            onChange={onTagsChange}
            label={t("tags")}
            disabled={processingPublication}
        />
        <div>
            {chips}
        </div>
    </div>
}
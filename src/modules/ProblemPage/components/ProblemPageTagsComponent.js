import {useStyles} from "../../ProblemAddPage/components/ProblemAddPageStyles";
import {Chip} from "@mui/material";
import React from "react";

export default function ProblemPageTagsComponent({tags}) {
    const classes = useStyles();
    if(!tags)
        return <div/>;
    const chips = tags.map((tag, index) => (tag !== "" ?
            <Chip
                key={index}
                className={classes.tagChip}
                label={tag}/> : <div key={index}/>
    ));
    return (<div>
        {chips}
    </div>);
}
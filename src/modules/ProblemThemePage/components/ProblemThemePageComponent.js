import React from "react";
import ProblemThemePageItemComponent from "./ProblemThemePageItemComponent";
import {Card, CardContent} from "@mui/material";
import {useStyles} from "./ProblemThemePageStyles";
import ProblemThemePageAddComponent from "./ProblemThemePageAddComponent";

export default function ProblemThemePageComponent({themes, onThemeChange, onUpdateClick}) {

    const classes = useStyles();

    const items = themes.map((theme, index) => (
            <ProblemThemePageItemComponent
                key={index}
                theme={theme.value}
                componentId={index}
                onThemeChange={onThemeChange}
                onUpdateClick={onUpdateClick}
            />
        )
    );

    return (
        <Card className={classes.mainCard}>
            <CardContent>
                <ProblemThemePageAddComponent/>
                {items}
            </CardContent>
        </Card>);
}
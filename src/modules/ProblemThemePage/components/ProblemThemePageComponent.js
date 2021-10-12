import React from "react";
import ProblemThemePageItemComponent from "./ProblemThemePageItemComponent";
import {Card, CardContent} from "@mui/material";
import {useStyles} from "./ProblemThemePageStyles";
import ProblemThemePageAddComponent from "./ProblemThemePageAddComponent";

export default function ProblemThemePageComponent({themes, errors, successes, onThemeChange, onUpdateClick, onNewThemeChange, onNewThemeCreateClick}) {

    const classes = useStyles();

    const items = themes.map((theme, index) => (
            <ProblemThemePageItemComponent
                key={index}
                theme={theme.value}
                error={errors[index]}
                success={successes[index]}
                componentId={index}
                onThemeChange={onThemeChange}
                onUpdateClick={onUpdateClick}
            />
        )
    );

    return (
        <Card className={classes.mainCard}>
            <CardContent>
                <ProblemThemePageAddComponent onNewThemeChange={onNewThemeChange} onAddClick={onNewThemeCreateClick}/>
                {items}
            </CardContent>
        </Card>);
}
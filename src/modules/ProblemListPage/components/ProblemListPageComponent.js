import React from "react";
import ProblemListPageItemComponent from "./ProblemListPageItemComponent";
import {Card, CardContent} from "@mui/material";
import {useStyles} from "./ProblemListPageStyles";

export default function ProblemListPageComponent({problems}) {
    const classes = useStyles();

    const items = problems.map((problem, index) =>
        <ProblemListPageItemComponent
            problem={problem}
            key={index}/>
    );

    return <Card className={classes.mainCard}>
        <CardContent>
            {items}
        </CardContent>
    </Card>
}
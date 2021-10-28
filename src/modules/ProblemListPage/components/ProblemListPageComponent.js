import React from "react";
import ProblemListPageItemComponent from "./ProblemListPageItemComponent";
import {Card, CardContent} from "@mui/material";
import {useStyles} from "./ProblemListPageStyles";
import {CloudinaryContext, Image} from "cloudinary-react";

export default function ProblemListPageComponent({problems}) {
    const classes = useStyles();

    const items = problems.map((problem, index) =>
        <ProblemListPageItemComponent
            problem={problem}
            key={index}/>
    );

    return <Card className={classes.mainCard}>
        <CardContent>
            <CloudinaryContext cloudName="dj65iclul">
                <div>
                    <Image publicId="sample" width="50" />
                </div>
                <Image publicId="sample" width="0.5" />
            </CloudinaryContext>
            {items}
        </CardContent>
    </Card>
}
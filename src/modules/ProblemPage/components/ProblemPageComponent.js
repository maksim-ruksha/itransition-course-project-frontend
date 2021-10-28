import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {useStyles} from "./ProblemPageStyles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ProblemPageTagsComponent from "./ProblemPageTagsComponent";


export default function ProblemPageComponent({problemModel}) {
    const classes = useStyles();
    return <Card className={classes.mainCard}>
        <CardContent>
            <Typography
                component="h1"
                variant="h4"
            >
                {problemModel.Title}
            </Typography>
            <Typography
                component="h1"
                variant="h5"
            >
                {problemModel.Theme}
            </Typography>
            <ReactMarkdown
                remarkPlugins={[[remarkGfm, {}]]}
                components={{
                    table: ({node, ...props}) => <table className={classes.borderCollapse}>{props.children}</table>,
                    th: ({node, ...props}) => <th className={classes.borderColor}>
                        <div className={classes.margin16px}>{props.children}</div>
                    </th>,
                    td: ({node, ...props}) => <td className={classes.borderColor}>
                        <div className={classes.margin16px}>{props.children}</div>
                    </td>,
                }}
            >
                {problemModel.RawDescription}
            </ReactMarkdown>
            <ProblemPageTagsComponent tags={problemModel.Tags}/>

        </CardContent>
    </Card>
}

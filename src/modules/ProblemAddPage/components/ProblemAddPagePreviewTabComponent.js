import React from "react";
import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'
import {useStyles} from "./ProblemAddPageStyles";

export default function ProblemAddPagePreviewTabComponent({rawDescription}) {
    const classes = useStyles();
    return (
        <ReactMarkdown
            remarkPlugins={[[remarkGfm,{}]]}
            components={{
                table: ({node, ...props}) => <table className={classes.borderCollapse}>{props.children}</table>,
                th: ({node, ...props}) => <th className={classes.borderColor}><div className={classes.margin16px}>{props.children}</div></th>,
                td: ({node, ...props}) => <td className={classes.borderColor}><div className={classes.margin16px}>{props.children}</div></td>,


            }}
        >
            {rawDescription}
        </ReactMarkdown>
    );
}
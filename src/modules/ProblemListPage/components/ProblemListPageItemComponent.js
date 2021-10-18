import React from "react";
import {Divider, Link, Typography} from "@mui/material";
import {useStyles} from "./ProblemListPageStyles";
import {PROBLEM_LIST_PAGE_HREF_PROBLEM} from "../constants/ProblemListPage";

export default function ProblemListPageItemComponent({problem}) {
    const classes = useStyles();
    return <div className={classes.margin16px}>
        <Typography
            component="h1"
            variant="h4">
            <Link underline="none"
                  href={PROBLEM_LIST_PAGE_HREF_PROBLEM + problem.id}>
                {problem.title}
            </Link>
        </Typography>
        <Divider/>
    </div>
}
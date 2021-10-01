import React from "react";
import {
    Card,
    CardContent, List,
    Typography
} from "@mui/material";

import {useStyles} from "./AccountPageStyles.js";

export default function AccountPageComponent({userProblemsListItems}) {
    const classes = useStyles();
    return (<Card className={classes.mainCard}>
                <CardContent>
                    <Typography
                        component="h1" variant="h4">
                        Имя пользователя
                    </Typography>
                    <Typography component="h1" variant="h6">
                        Задачи пользователя
                    </Typography>

                    <List>
                        {userProblemsListItems}
                    </List>

                </CardContent>
            </Card>);
}
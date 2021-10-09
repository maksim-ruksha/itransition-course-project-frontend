import React from "react";
import {Button, Divider, TextField} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {useStyles} from "./ProblemThemePageStyles";

export default function ProblemThemePageItemComponent({theme, onThemeChange, onUpdateClick, componentId}) {

    const classes = useStyles();
    const t = useTranslation("problem-theme-page");
    return (
        <div>
            <div className={classes.margin16px}>
                <TextField
                    id={componentId.toString()}
                    value={theme}
                    className={classes.margin16px}
                    onChange={onThemeChange}
                    label={t("theme")}
                />
            </div>
            <div className={classes.margin16px}>
                <Button
                    id={componentId.toString()}
                    variant="outlined"
                    onClick={onUpdateClick}>
                    {
                        t("update")
                    }
                </Button>
            </div>
            <Divider className={classes.margin16px}/>
        </div>
    );
}
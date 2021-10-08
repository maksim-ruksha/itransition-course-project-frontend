import React from "react";
import {useStyles} from "./ProblemThemePageStyles";
import {useTranslation} from "react-multi-lang";
import {Button, Divider, TextField} from "@mui/material";

export default function ProblemThemePageAddComponent({theme, onThemeChange, onUpdateClick})
{
    const classes = useStyles();
    const t = useTranslation("problem-theme-page");

    return (
        <div>
            <div className={classes.margin16px}>
                <TextField
                    className={classes.margin16px}
                    onChange={onThemeChange}
                    value={theme}
                    label={t("theme")}>
                </TextField>
            </div>
            <div className={classes.margin16px}>
                <Button
                    variant="outlined"
                    onClick={onUpdateClick}>
                    {t("update")}
                </Button>
            </div>
            <Divider className={classes.margin16px}/>
        </div>);
}
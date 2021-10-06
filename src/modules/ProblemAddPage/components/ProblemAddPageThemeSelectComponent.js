import React from "react";
import {useTranslation} from "react-multi-lang";
import {MenuItem, Select} from "@mui/material";
import {useStyles} from "./ProblemAddPageStyles";


export default function ProblemAddPageThemeSelectComponent({onThemeChange, themes})
{
    const t = useTranslation("problem-add-page");
    const classes = useStyles();
    const items = themes.map((theme, index) =>
        <MenuItem key={theme.value} value={index}>{theme.value}</MenuItem>
    );
    return <Select
        className={classes.select}
        onChange={onThemeChange}
        label={t("theme")}
    >{items}</Select>
}
import React from "react";
import {useTranslation} from "react-multi-lang";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useStyles} from "./ProblemAddPageStyles";


export default function ProblemAddPageThemeSelectComponent({onThemeChange, themes}) {
    const t = useTranslation("problem-add-page");
    const classes = useStyles();
    const items = themes.map((theme, index) =>
        <MenuItem
            key={theme.value}
            value={index}
            id={theme.id}
        >
            {theme.value}
        </MenuItem>
    );
    return (<FormControl>
            <InputLabel id="problem-add-theme-select">{t("theme")}</InputLabel>
            <Select
                labelId="problem-add-theme-select"
                label={t("theme")}
                defaultValue=""
                className={classes.select}
                onChange={onThemeChange}
            >
                {items}
            </Select>
        </FormControl>
    );
}
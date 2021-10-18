import React from "react";
import {
    AppBar,
    Box,
    Button,
    FormControlLabel, Link,
    Switch,
    Toolbar,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";
import {useTranslation} from "react-multi-lang";
import {useStyles} from "./AppBarStyles";
import {LOGIN_PAGE_PATH} from "../../../shared/LoginPage/constants/LoginPage";

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

export default function AppBarComponent({
                                            onThemeSwitchChange,
                                            isDarkThemeEnabled,
                                            userName,
                                            onLanguageClick,
                                            language
                                        }) {

    const classes = useStyles();
    const t = useTranslation("app-bar");
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">

                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {t("title")}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                checked={isDarkThemeEnabled}
                                onChange={onThemeSwitchChange}/>
                        }
                        label={t("dark-mode")}
                        labelPlacement="start"

                    />


                    <div className={classes.margin16px}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            onClick={onLanguageClick}>
                            {language}
                        </Button>
                    </div>

                    {/*<Button
                        onClick={onLoginClick}
                        color="inherit">{userName ? userName : t("login")}
                    </Button>*/}
                    <Button>

                        <Link
                            href={LOGIN_PAGE_PATH}
                            underline="none">
                            {userName ? userName : t("login")}
                        </Link>
                    </Button>
                </Toolbar>

            </AppBar>
            <Offset/>
        </Box>


    );
}
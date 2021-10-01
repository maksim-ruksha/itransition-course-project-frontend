import React from "react";
import {useStyles} from "./LoginPageStyles";
import {Button, Card, CardContent, TextField,} from "@mui/material";
import {useTranslation} from "react-multi-lang";

export default function LoginPageComponent({onLoginChange, onPasswordChange, onLoginClick}) {

    const classes = useStyles();
    const t = useTranslation("login-page");

    return <Card className={classes.mainCard}>
        <CardContent>
            <div className={classes.margin16px}>
                <TextField label={t("login")}
                           onChange={onLoginChange}
                />
            </div>
            <div className={classes.margin16px}>
                <TextField label={t("password")}
                           type="password"
                           onChange={onPasswordChange}
                />
            </div>
            <Button
                className={classes.margin16px}
                variant="contained"
                onClick={onLoginClick}
            >
                {t("sign-in")}
            </Button>
        </CardContent>
    </Card>;
}


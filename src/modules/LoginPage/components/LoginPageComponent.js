import React from "react";
import {useStyles} from "./LoginPageStyles";
import {Button, Card, CardContent, Link, TextField, Typography,} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {REGISTER_PAGE_PATH} from "../../../shared/RegisterPage/constants/RegisterPage";

export default function LoginPageComponent({onLoginChange, onPasswordChange, onLoginClick, error}) {

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
            {error ?
                <div className={classes.margin16px}>
                    <Typography color="error.main">
                        {error}
                    </Typography>
                </div>
                :
                <div/>
            }
            <div className={classes.horizontalDiv}>
                <Button
                    className={classes.margin16px}
                    variant="contained"
                    onClick={onLoginClick}
                >
                    {t("sign-in")}
                </Button>
            </div>
            <div className={classes.horizontalDiv}>
                <Typography>
                    {t("or")}
                </Typography>
            </div>
            <div className={classes.horizontalDiv}>
                <Button
                    className={classes.margin16px}
                    variant="outlined"
                >
                    <Link
                        href={REGISTER_PAGE_PATH}
                        underline="none">
                        {t("register")}
                    </Link>
                </Button>
            </div>
        </CardContent>
    </Card>;
}


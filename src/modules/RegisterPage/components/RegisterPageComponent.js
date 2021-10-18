import React from "react";
import {useStyles} from "./RegisterPageStyles";
import {Button, Card, CardContent, Link, TextField, Typography,} from "@mui/material";
import {useTranslation} from "react-multi-lang";
import {LOGIN_PAGE_PATH} from "../../../shared/LoginPage/constants/LoginPage";

export default function RegisterPageComponent({
                                                  onLoginChange,
                                                  onPasswordChange,
                                                  onPasswordRepeatChange,
                                                  onRegisterClick,
                                                  error
                                              }) {

    const classes = useStyles();
    const t = useTranslation("register-page");

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
            <div className={classes.margin16px}>
                <TextField label={t("password-repeat")}
                           type="password"
                           onChange={onPasswordRepeatChange}
                />
            </div>
            {error ?
                <div className={classes.margin16px}>
                    <Typography color="error.main">
                        {error + " (перевести бля)"}
                    </Typography>
                </div>
                : <div/>
            }
            <Button
                className={classes.margin16px}
                variant="contained"
                onClick={onRegisterClick}
            >
                {t("register")}
            </Button>
            <div className={classes.horizontalDiv}>
                <Button
                    className={classes.margin16px}
                    variant="outlined"
                >
                    <Link
                        href={LOGIN_PAGE_PATH}
                        underline="none">
                        {t("sign-in")}
                    </Link>
                </Button>
            </div>
        </CardContent>
    </Card>;
}


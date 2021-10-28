import React, {Component} from "react";
import './App.css';

import {Redirect, Route, Switch, withRouter} from "react-router-dom"

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Cookies from "universal-cookie/es6";

import {setDefaultLanguage, setLanguage, setTranslations} from "react-multi-lang";

import AccountPageContainer from "./modules/AccountPage/containers/AccountPageContainer";
import ProblemAddPageContainer from "./modules/ProblemAddPage/containers/ProblemAddPageContainer";
import LoginPageContainer from "./modules/LoginPage/containers/LoginPageContainer";

import {PROBLEM_ADD_PAGE_PATH} from "./shared/ProblemAddPage/constants/ProblemAddPage";
import {ACCOUNT_PAGE_PATH} from "./shared/AccountPage/constants/AccountPage";

import {LOGIN_PAGE_PATH} from "./shared/LoginPage/constants/LoginPage";

import en from "./shared/App/translations/en.json";
import ru from "./shared/App/translations/ru.json";
import RegisterPageContainer from "./modules/RegisterPage/containers/RegisterPageContainer";
import {REGISTER_PAGE_PATH} from "./shared/RegisterPage/constants/RegisterPage";
import {
    APP_COOKIES_LANG_EN,
    APP_COOKIES_LANG_EXPIRATION_TIME,
    APP_COOKIES_LANG_KEY, APP_COOKIES_LANG_RU,
    APP_COOKIES_THEME_DARK,
    APP_COOKIES_THEME_EXPIRATION_TIME,
    APP_COOKIES_THEME_KEY,
    APP_COOKIES_THEME_LIGHT
} from "./shared/App/constants/App";

import AppBarContainer from "./modules/AppBar/containers/AppBarContainer";
import {PROBLEM_PAGE_PATH} from "./shared/ProblemPage/constants/ProblemPage";
import ProblemPageContainer from "./modules/ProblemPage/containers/ProblemPageContainer";
import ProblemListPageContainer from "./modules/ProblemListPage/containers/ProblemListPageContainer";
import {PROBLEM_LIST_PAGE_PATH} from "./shared/ProblemListPage/constants/ProblemListPage";


const lightTheme = createTheme({
    palette: {
        mode: "light",
        type: "light",
    }
});
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        type: "dark",
    }
});

setTranslations({en, ru})
setDefaultLanguage('ru');

class App extends Component {

    constructor(props) {
        super(props);

        const isDarkThemeEnabled = this.loadThemeCookie();
        const lang = this.loadLangCookie();
        setLanguage(this.getLangStringToUse(lang));
        this.state = {
            darkThemeEnabled: isDarkThemeEnabled,
            language: lang,
        }
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onLanguageClick = this.onLanguageClick.bind(this);

    }

    onThemeChange(event) {
        this.setState({darkThemeEnabled: event.target.checked});
    }

    onLanguageClick() {
        const lang = this.state.language === APP_COOKIES_LANG_EN ? APP_COOKIES_LANG_RU : APP_COOKIES_LANG_EN;
        this.setState({language: lang});
        setLanguage(this.getLangStringToUse(lang));
    }

    getLangStringToUse(lang)
    {
        return lang === APP_COOKIES_LANG_EN ? "en" : "ru";
    }


    loadThemeCookie() {
        const cookies = new Cookies();
        const theme = cookies.get(APP_COOKIES_THEME_KEY);
        return theme === APP_COOKIES_THEME_DARK;
    }

    loadLangCookie() {
        const cookies = new Cookies();
        const lang = cookies.get(APP_COOKIES_LANG_KEY);
        if (lang)
            return lang;
        return APP_COOKIES_LANG_EN;
    }

    saveCookies() {
        const cookies = new Cookies();
        const themeCookieExpirationDate = this.expirationTime(APP_COOKIES_THEME_EXPIRATION_TIME);
        const langCookieExpirationDate = this.expirationTime(APP_COOKIES_LANG_EXPIRATION_TIME);

        cookies.set(APP_COOKIES_THEME_KEY, this.state.darkThemeEnabled ? APP_COOKIES_THEME_DARK : APP_COOKIES_THEME_LIGHT, {expires: themeCookieExpirationDate});
        cookies.set(APP_COOKIES_LANG_KEY, this.state.language.toLowerCase(), {expires: langCookieExpirationDate});
    }

    expirationTime(time) {
        const now = new Date();
        now.setTime(now.getTime() + time);
        return now;
    }

    render() {
        this.saveCookies();
        const {history} = this.props;
        const theme = this.state.darkThemeEnabled ? darkTheme : lightTheme;
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <AppBarContainer onThemeSwitchChange={this.onThemeChange}
                                     isDarkThemeEnabled={this.state.darkThemeEnabled}
                                     onLanguageClick={this.onLanguageClick}
                                     language={this.state.language}
                    />
                    <Switch>
                        <Route history={history} path={ACCOUNT_PAGE_PATH} component={AccountPageContainer}/>
                        <Route history={history} path={PROBLEM_ADD_PAGE_PATH} component={ProblemAddPageContainer}/>
                        <Route history={history} path={LOGIN_PAGE_PATH} component={LoginPageContainer}/>
                        <Route history={history} path={REGISTER_PAGE_PATH} component={RegisterPageContainer}/>
                        <Route history={history} path={PROBLEM_PAGE_PATH} component={ProblemPageContainer}/>
                        <Route history={history} path={PROBLEM_LIST_PAGE_PATH} component={ProblemListPageContainer}/>
                        <Redirect from="/" to={PROBLEM_ADD_PAGE_PATH}/>
                    </Switch>
                </CssBaseline>
            </ThemeProvider>
        )
    }
}

export default withRouter(App);

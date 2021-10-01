import React, {Component} from "react";
import './App.css';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Cookies from "universal-cookie/es6";

import AccountPageContainer from "./modules/AccountPage/containers/AccountPageContainer";
import ProblemAddPageContainer from "./modules/ProblemAddPage/containers/ProblemAddPageContainer";
import LoginPageContainer from "./modules/LoginPage/containers/LoginPageContainer";

import AppBarComponent from "./modules/AppBar/components/AppBarComponent";

import {setDefaultLanguage, setTranslations} from "react-multi-lang";


import {PROBLEM_ADD_PAGE_PATH} from "./shared/ProblemAddPage/constants/ProblemAddPage";
import {ACCOUNT_PAGE_PATH} from "./shared/AccountPage/constants/AccountPage";

import {LOGIN_PAGE_PATH} from "./shared/LoginPage/constants/LoginPage";

import en from "./shared/App/translations/en.json";
import ru from "./shared/App/translations/ru.json";


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
        this.state = {
            darkThemeEnabled: isDarkThemeEnabled,
        }
        this.onThemeChange = this.onThemeChange.bind(this);

    }

    onThemeChange(event) {
        this.setState({darkThemeEnabled: event.target.checked});
        this.saveThemeCookie(event.target.checked);
    }

    // TODO: transfer cookie name to constants
    loadThemeCookie() {
        const cookies = new Cookies();
        const theme = cookies.get("theme");
        return theme === "dark";
    }

    saveThemeCookie(isDarkThemeEnabled) {
        const cookies = new Cookies();
        // TODO: transfer expiration time to constants
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 20 * 60 * 1000);
        cookies.set("theme", isDarkThemeEnabled ? "dark" : "light", {expires: expirationDate});
    }

    render() {
        const {history} = this.props;
        const theme = this.state.darkThemeEnabled ? darkTheme : lightTheme;
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <AppBarComponent onThemeSwitchChange={this.onThemeChange}
                                     isDarkThemeEnabled={this.state.darkThemeEnabled}/>
                    <Switch>
                        <Route history={history} path={ACCOUNT_PAGE_PATH} component={AccountPageContainer}/>
                        <Route history={history} path={PROBLEM_ADD_PAGE_PATH} component={ProblemAddPageContainer}/>
                        <Route history={history} path={LOGIN_PAGE_PATH} component={LoginPageContainer}/>
                        <Redirect from="/" to={PROBLEM_ADD_PAGE_PATH}/>
                    </Switch>
                </CssBaseline>
            </ThemeProvider>
        )
    }
}

export default withRouter(App);

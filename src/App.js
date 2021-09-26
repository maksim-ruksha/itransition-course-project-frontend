import {Component} from "react";
import './App.css';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import {ACCOUNT_PAGE_PATH} from "./modules/AccountPage/constants/AccountPage";
import AccountPageComponent from "./modules/AccountPage/components/AccountPageComponent";

import {createMuiTheme} from '@material-ui/core/styles';
import {Container, ThemeProvider} from "@mui/material";

const lightTheme = createMuiTheme({
   palette: {
       type: 'light'
   }
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});


class App extends Component {
    render() {
        const {history} = this.props;
        return (
            <ThemeProvider theme={darkTheme}>
                <Container>
                    <Switch>
                        <Route history={history} path={ACCOUNT_PAGE_PATH} component={AccountPageComponent}/>
                        <Redirect from="/" to={ACCOUNT_PAGE_PATH}/>
                    </Switch>
                </Container>
            </ThemeProvider>
        );
    }
}

export default withRouter(App);

import React, {Component} from "react";
import AppBarComponent from "../components/AppBarComponent";
import {APP_LOCAL_STORAGE_USER_NAME_KEY} from "../../../shared/App/constants/App";
import {Redirect} from "react-router-dom";

class AppBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            loginClicked: false,
        }
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    loadUserName() {
        const userName = localStorage.getItem(APP_LOCAL_STORAGE_USER_NAME_KEY);
        if (userName) {
            this.setState({userName: userName});
        }
    }

    onLoginClick(event)
    {
        this.setState({loginClicked: true});
    }

    render() {
        this.loadUserName();
        if(this.state.loginClicked)
            return <Redirect to={this.state.redirect}/>

        return <AppBarComponent
            userName={this.state.userName}
            onThemeSwitchChange={this.props.onThemeSwitchChange}
            isDarkThemeEnabled={this.props.isDarkThemeEnabled}
            onLanguageClick={this.props.onLanguageClick}

            language={this.props.language}
        />
    }
}

export default AppBarContainer;
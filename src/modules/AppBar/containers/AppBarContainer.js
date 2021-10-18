import React, {Component} from "react";
import AppBarComponent from "../components/AppBarComponent";
import {APP_LOCAL_STORAGE_USER_NAME_KEY} from "../../../shared/App/constants/App";

class AppBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
        }
    }

    loadUserName() {
        const userName = localStorage.getItem(APP_LOCAL_STORAGE_USER_NAME_KEY);
        if (userName) {
            this.setState({userName: userName});
        }
    }

    componentDidMount() {
        this.loadUserName();
    }


    render() {
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
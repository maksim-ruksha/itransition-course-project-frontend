import React, {Component} from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import axios from "axios";

import {
    APP_API_BASE_URL, APP_LOCAL_STORAGE_USER_NAME_KEY, APP_LOCAL_STORAGE_USER_ROLE_KEY,
} from "../../../shared/App/constants/App";

import {REGISTER_PAGE_API_REGISTER} from "../../RegisterPage/constants/RegisterPage";
import {LOGIN_PAGE_API_LOGIN} from "../constants/LoginPage";


class LoginPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            error: null,
        }

        this.onLoginClick = this.onLoginClick.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    saveUser(userModel) {
        localStorage.setItem(APP_LOCAL_STORAGE_USER_NAME_KEY, userModel.name);
        localStorage.setItem(APP_LOCAL_STORAGE_USER_ROLE_KEY, userModel.role);
    }

    async onLoginClick(event) {
        await axios.get(APP_API_BASE_URL + LOGIN_PAGE_API_LOGIN, {
            params: {
                name: this.state.login,
                password: this.state.password,
                passwordRepeat: this.state.passwordRepeat,
            }
        }).catch((error) => {
            this.setState({error: error.response.data});
        }).then((response) => {
            if (response.status === 200) {
                this.saveUser(response.data);
            }
        });

    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return <LoginPageComponent
            onLoginChange={this.onLoginChange}
            onPasswordChange={this.onPasswordChange}
            onLoginClick={this.onLoginClick}
            error={this.state.error}
        />
    }
}

export default LoginPageContainer;
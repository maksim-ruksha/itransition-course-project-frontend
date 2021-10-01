import React, {Component} from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import axios from "axios";

import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import {LOGIN_PAGE_API_LOGIN} from "../constants/LoginPage";


class LoginPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            token: "",
            isError: false,
        }

        this.onLoginClick = this.onLoginClick.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    async onLoginClick(event) {
        try {
            const response = await axios.get(APP_API_BASE_URL + LOGIN_PAGE_API_LOGIN, {
                params: {
                    name: this.state.login,
                    password: this.state.password
                }
            });
            if (response.status === 200) {

            }
        }catch (e) {
            e
            this.setState({isError: true})
        }
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
        />
    }
}

export default LoginPageContainer;
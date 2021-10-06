import React, {Component} from "react";
import RegisterPageComponent from "../components/RegisterPageComponent";
import axios from "axios";

import {
    APP_API_BASE_URL,
    APP_LOCAL_STORAGE_USER_NAME_KEY,
    APP_LOCAL_STORAGE_USER_ROLE_KEY
} from "../../../shared/App/constants/App";
import {REGISTER_PAGE_API_REGISTER} from "../constants/RegisterPage";
import {ACCOUNT_PAGE_PATH} from "../../../shared/AccountPage/constants/AccountPage";
import {Redirect} from "react-router-dom";


class RegisterPageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
            passwordRepeat: "",
            error: false,
            redirect: null,
        }

        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
    }

    saveUser(userModel) {
        localStorage.setItem(APP_LOCAL_STORAGE_USER_NAME_KEY, userModel.name);
        localStorage.setItem(APP_LOCAL_STORAGE_USER_ROLE_KEY, userModel.role);
    }

    async onRegisterClick(event) {
        const response = await axios.get(APP_API_BASE_URL + REGISTER_PAGE_API_REGISTER, {
            params: {
                name: this.state.login,
                password: this.state.password,
                passwordRepeat: this.state.passwordRepeat,
            }
        }).catch(function (error) {
            this.setState({error: error.response.data});
        });

        if (response.status === 200) {
            this.saveUser(response.data);
            this.setState({redirect: ACCOUNT_PAGE_PATH});
        }
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onPasswordRepeatChange(event) {
        this.setState({passwordRepeat: event.target.value});
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect}/>

        return <RegisterPageComponent
            onLoginChange={this.onLoginChange}
            onPasswordChange={this.onPasswordChange}
            onPasswordRepeatChange={this.onPasswordRepeatChange}
            onRegisterClick={this.onRegisterClick}
            error={this.state.error}
        />
    }
}

export default RegisterPageContainer;
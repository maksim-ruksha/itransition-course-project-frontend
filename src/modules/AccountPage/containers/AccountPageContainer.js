import React, {Component} from "react";
import AccountPageComponent from "../components/AccountPageComponent";
import axios from "axios";
import {ACCOUNT_PAGE_API_GET_USER_PROBLEMS} from "../../../shared/AccountPage/constants/AccountPage";
import {APP_API_BASE_URL} from "../../../shared/App/constants/App";

const pageSize = 25;

class AccountPageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: props.userName,
            userId: props.userId,
            problemsPage: 1,
        }

    }

    async getUserProblems(page) {

        const response = await axios.get(APP_API_BASE_URL + ACCOUNT_PAGE_API_GET_USER_PROBLEMS, null, {
            params: {
                name: this.state.userId,
                start: (page - 1) * pageSize,
                pageSize: pageSize,
            }
        }).catch((error) => {

        }).then((response) => {
            if (response.status === 200) {

            }
        });

        return response.data;
    }

    async makeUserProblemsListItems() {
        // TODO: implement makeUserProblemsListItems()
        await this.getUserProblems()
    }


    render() {
        this.makeUserProblemsListItems();
        return <AccountPageComponent/>
    }
}

export default AccountPageContainer;
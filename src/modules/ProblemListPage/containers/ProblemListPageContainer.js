import React, {Component} from "react";
import ProblemListPageComponent from "../components/ProblemListPageComponent";
import axios from "axios";

import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import {PROBLEM_LIST_PAGE_API_GET_PROBLEMS} from "../constants/ProblemListPage";


class ProblemListPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            problems: [],
        }
    }

    componentDidMount() {
        this.loadProblems();
    }

    async loadProblems() {
        await axios.get(APP_API_BASE_URL + PROBLEM_LIST_PAGE_API_GET_PROBLEMS)
            .then((response) => {
                this.setState({problems: response.data});
            })
            .catch((error) => {

            });
    }

    render() {
        return <ProblemListPageComponent problems={this.state.problems}/>;
    }

}

export default ProblemListPageContainer;
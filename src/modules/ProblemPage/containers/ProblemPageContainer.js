import React, {Component} from "react";
import ProblemPageComponent from "../components/ProblemPageComponent";
import {PROBLEM_PAGE_API_FIND_PROBLEM_BY_ID} from "../constants/ProblemPage";
import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import axios from "axios";

class ProblemPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            problem: {tags: []}
        }
    }

    componentDidMount() {
        this.loadProblem()
    }

    async loadProblem() {
        const id = this.props.match.params.id;
        await axios.get(APP_API_BASE_URL + PROBLEM_PAGE_API_FIND_PROBLEM_BY_ID, {
            params:
                {
                    id: id
                }
        })
            .catch(
                (error) => {
                    console.log(error.response.data);
                })
            .then((response) => {

                this.setState({problem: response.data});
            });
    }


    render() {
        return <ProblemPageComponent
            problemModel={this.state.problem}
        />
    }
}

export default ProblemPageContainer;
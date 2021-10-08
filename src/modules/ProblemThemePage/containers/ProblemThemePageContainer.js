import React, {Component} from "react";
import ProblemThemePageComponent from "../components/ProblemThemePageComponent";
import axios from "axios";
import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import {
    PROBLEM_THEME_PAGE_API_GET_PROBLEM_THEMES,
    PROBLEM_THEME_PAGE_API_UPDATE_PROBLEM_THEME
} from "../../../shared/ProblemThemePage/constants/ProblemThemePage";

class ProblemThemePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadedThemes: [],
        };
        this.onThemeUpdateClick = this.onThemeUpdateClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
    }

    componentDidMount() {
        this.loadThemes();
    }

    async loadThemes() {
        const response = await axios.get(APP_API_BASE_URL + PROBLEM_THEME_PAGE_API_GET_PROBLEM_THEMES, {params: {}})
            .catch(function (error) {
            });

        if (response.status === 200) {
            this.setState({loadedThemes: response.data});
        }
    }

    onThemeChange(event) {
        console.log(event);
        console.log("onThemeChange, value: " + event.target.value);
        const index = parseInt(event.target.id);
        console.log("key index: " + index);
        console.log("key index: " + event.target.id);
        const themes = this.state.loadedThemes;
        const theme = themes[index];
        console.log(theme);
        theme.value = event.target.value;
        themes[index] = theme;
        this.setState({loadedThemes: themes});
    }

    onThemeUpdateClick(event) {
    }


    render() {
        console.log("render()");
        return <ProblemThemePageComponent
            themes={this.state.loadedThemes}
            onThemeChange={this.onThemeChange}
            onUpdateClick={this.onThemeUpdateClick}/>
    }
}

export default ProblemThemePageContainer;
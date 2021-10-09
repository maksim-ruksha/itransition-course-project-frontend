import React, {Component} from "react";
import ProblemThemePageComponent from "../components/ProblemThemePageComponent";
import axios from "axios";
import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import {
    PROBLEM_THEME_PAGE_API_CREATE_PROBLEM_THEME,
    PROBLEM_THEME_PAGE_API_GET_PROBLEM_THEMES,
    PROBLEM_THEME_PAGE_API_UPDATE_PROBLEM_THEME
} from "../../../shared/ProblemThemePage/constants/ProblemThemePage";
import {useTranslation} from "react-multi-lang";


class ProblemThemePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadedThemes: [],
            errors: [],
            successes: [],
            newTheme: "",
            newThemeSuccess: "",
            newThemeError: "",
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
        const themes = this.state.loadedThemes;

        const index = parseInt(event.target.id);
        const theme = themes[index];
        theme.value = event.target.value;
        themes[index] = theme;
        this.setState({loadedThemes: themes});
    }

    async onThemeUpdateClick(event) {
        const index = parseInt(event.target.id);
        const theme = this.state.loadedThemes[index];
        console.log(APP_API_BASE_URL + PROBLEM_THEME_PAGE_API_UPDATE_PROBLEM_THEME);

        const response = await axios.post(APP_API_BASE_URL + PROBLEM_THEME_PAGE_API_UPDATE_PROBLEM_THEME,
            {
                id: theme.id,
                value: theme.value,

            }).catch(function (error) {
            console.log(error.response.data);
            const errors = this.state.errors;
            errors[index] = error.response.data;
            this.setState({errors: errors});
        });

        if (response.status === 200) {

            const successes = this.state.successes;
            successes[index] = true;
            this.setState({successes: successes});
        }
    }

    onNewThemeChange(event) {
        this.setState({newTheme: event.target.value});
    }

    onNewThemeCreateClick(event) {
        const response = axios.post(APP_API_BASE_URL + PROBLEM_THEME_PAGE_API_CREATE_PROBLEM_THEME,
            {
                value: event.target.value
            }
        ).catch(function (error) {
            this.setState({newThemeError: error});
        });

        if(response.status === 200)
        {
            this.setState({newThemeSuccess: "sucksass!"});
        }
    }


    render() {
        return <ProblemThemePageComponent
            themes={this.state.loadedThemes}
            errors={this.state.errors}
            successes={this.state.successes}
            onThemeChange={this.onThemeChange}
            onUpdateClick={this.onThemeUpdateClick}/>
    }
}

export default ProblemThemePageContainer;
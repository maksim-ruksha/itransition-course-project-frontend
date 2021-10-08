import React, {Component} from "react";
import ProblemAddPageComponent from "../components/ProblemAddPageComponent";
import ProblemAddPageImageListItemComponent from "../components/ProblemAddPageImageListItemComponent";
import ProblemAddPageAddImageListItemComponent from "../components/ProblemAddPageAddImageListItemComponent";
import {APP_API_BASE_URL} from "../../../shared/App/constants/App";
import {PROBLEM_ADD_PAGE_API_GET_PROBLEM_THEMES} from "../constants/ProblemAddPage";
import axios from "axios";

class ProblemAddPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabsValue: 0,

            title: "",
            rawDescription: "",
            tags: "",
            theme: null,
            allThemes: [{value: ""}],
            problemImages: [],
        }

        this.onTitleChange = this.onTabsChange.bind(this);
        this.onRawDescriptionChange = this.onRawDescriptionChange.bind(this);
        this.onTabsChange = this.onTabsChange.bind(this);
        this.onImageFieldChange = this.onImageFieldChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);

        this.loadThemes();
    }

    makeImageList() {
        const images = this.state.problemImages.map(file => file != null ?
            (<ProblemAddPageImageListItemComponent
                key={file.name}
                image={file ? URL.createObjectURL(file) : null}/>) : {}
        );
        return <div>
            {images}
            <ProblemAddPageAddImageListItemComponent onImageFieldChange={this.onImageFieldChange}/>
        </div>
    }

    async loadThemes() {
        const response = await axios.get(APP_API_BASE_URL + PROBLEM_ADD_PAGE_API_GET_PROBLEM_THEMES, {params: {}})
            .catch(function (error) {
            });

        if (response.status === 200) {
            this.setState({allThemes: response.data});
        }
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onRawDescriptionChange(event) {
        this.setState({rawDescription: event.target.value});
    }

    onTabsChange(event, newValue) {
        this.setState({tabsValue: newValue});
    }

    onImageFieldChange(event) {
        const currentImages = this.state.problemImages;
        currentImages.push(event.target.files[0]);
        this.setState({problemImages: currentImages});
    }

    onTagsChange(event) {
        this.setState({tags: event.target.value});
    }

    onThemeChange(event) {
        this.setState({theme: event.target.value});
    }

    render() {
        return (
            <ProblemAddPageComponent
                onTabsChange={this.onTabsChange}
                tabsValue={this.state.tabsValue}
                onTitleTextChange={this.onTitleChange}
                onRawDescriptionTextChange={this.onRawDescriptionChange}
                onImageFieldChange={this.onImageFieldChange}
                rawDescription={this.state.rawDescription}
                imageList={this.makeImageList()}
                onTagsChange={this.onTagsChange}
                tags={this.state.tags.split(",")}
                themes={this.state.allThemes}
                onThemeChange={this.onThemeChange}
            />
        );
    }

}

export default ProblemAddPageContainer;
import React, {Component} from "react";
import axios from "axios";

import ProblemAddPageComponent from "../components/ProblemAddPageComponent";
import ProblemAddPageImageListItemComponent from "../components/ProblemAddPageImageListItemComponent";
import ProblemAddPageAddImageListItemComponent from "../components/ProblemAddPageAddImageListItemComponent";
import {APP_API_BASE_URL, VALID_IMAGE_FILE_TYPES} from "../../../shared/App/constants/App";
import {
    PROBLEM_ADD_PAGE_API_CREATE_PROBLEM,
    PROBLEM_ADD_PAGE_API_GET_PROBLEM_THEMES
} from "../constants/ProblemAddPage";


class ProblemAddPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabsValue: 0,

            title: "",
            rawDescription: "",
            highlightAddImageButton: false,
            tags: "",
            theme: null,
            allThemes: [{value: ""}],
            problemImages: [],
            solutionVariants: []
        }

        this.onTitleChange = this.onTitleChange.bind(this);

        this.onRawDescriptionChange = this.onRawDescriptionChange.bind(this);
        this.onTabsChange = this.onTabsChange.bind(this);
        this.onImageFieldChange = this.onImageFieldChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);

        this.onThemeChange = this.onThemeChange.bind(this);

        this.onImageDragEnter = this.onImageDragEnter.bind(this);
        this.onImageDragOver = this.onImageDragOver.bind(this);
        this.onImageDragLeave = this.onImageDragLeave.bind(this);
        this.onImageDragDrop = this.onImageDragDrop.bind(this);

        this.onRemoveImageClick = this.onRemoveImageClick.bind(this);

        this.onSolutionAddClick = this.onSolutionAddClick.bind(this);
        this.onSolutionRemoveClick = this.onSolutionRemoveClick.bind(this);
        this.onSolutionChange = this.onSolutionChange.bind(this);
        this.onPublishClick = this.onPublishClick.bind(this);
    }

    componentDidMount() {
        this.loadThemes();
    }

    makeImageList() {
        const images = this.state.problemImages.map((file, index) => file != null ?
            (<ProblemAddPageImageListItemComponent
                componentId={index}
                onRemoveImageClick={this.onRemoveImageClick}
                key={file.name}
                image={file ? URL.createObjectURL(file) : null}/>) : {}
        );
        return <div>
            {images}
            <ProblemAddPageAddImageListItemComponent
                onImageDragEnter={this.onImageDragEnter}
                onImageDragOver={this.onImageDragOver}
                onImageDragLeave={this.onImageDragLeave}
                onImageDragDrop={this.onImageDragDrop}
                onImageFieldChange={this.onImageFieldChange}
                highlight={this.state.highlightAddImageButton}
            />
        </div>
    }


    async loadThemes() {
        await axios.get(APP_API_BASE_URL + PROBLEM_ADD_PAGE_API_GET_PROBLEM_THEMES, {params: {}})
            .catch((error) => {

            }).then((response) => {
                if (response.status === 200) {
                    this.setState({allThemes: response.data});
                }
            });


    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onRawDescriptionChange(event) {
        this.setState({rawDescription: event.target.value});
    }

    onTabsChange(event, newValue) {
        this.setState({tabsValue: newValue === undefined ? 0 : newValue});
    }

    onImageFieldChange(event) {
        this.pushNewImage(event.target.files[0]);
    }


    onTagsChange(event) {
        this.setState({tags: event.target.value});
    }

    onThemeChange(event) {
        this.setState({theme: this.state.allThemes[event.target.value]});
    }

    onImageDragEnter(event) {
        this.setState({highlightAddImageButton: true});
        event.preventDefault();
    }

    onImageDragOver(event) {
        event.preventDefault();
    }

    onImageDragLeave(event) {
        this.setState({highlightAddImageButton: false});
        event.preventDefault();
    }

    onImageDragDrop(event) {
        this.setState({highlightAddImageButton: false});
        event.preventDefault();
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
            this.pushNewImage(event.dataTransfer.files[i]);
        }
    }

    isImage(file) {
        return VALID_IMAGE_FILE_TYPES.indexOf(file.type) !== -1;
    }

    pushNewImage(file) {
        const currentImages = this.state.problemImages;
        currentImages.push(file);
        this.setState({problemImages: currentImages});
    }

    removeImage(index) {
        const currentImages = this.state.problemImages;
        currentImages.splice(index, 1);
        this.setState({problemImages: currentImages});
    }

    onRemoveImageClick(event) {
        const index = event.target.id;
        this.removeImage(index);
    }

    onSolutionAddClick(event) {
        const solutions = this.state.solutionVariants;
        solutions.push("");
        this.setState({solutionVariants: solutions});
    }

    onSolutionRemoveClick(event) {
        const index = event.target.id;
        const solutions = this.state.solutionVariants;
        solutions.splice(index, 1);
        this.setState({solutionVariants: solutions});
    }

    onSolutionChange(event) {
        const index = event.target.id;
        const solutions = this.state.solutionVariants;
        solutions[index] = event.target.value;
        this.setState({solutionVariants: solutions});
    }

    async onPublishClick(event) {
        // TODO: onPublishClick();
        event.preventDefault();
        const formData = new FormData();
        formData.append("Title", this.state.title);
        formData.append("RawDescription", this.state.rawDescription);
        formData.append("ProblemTheme", JSON.stringify(this.state.theme));
        formData.append("Tags", JSON.stringify(this.state.tags));
        formData.append("Images", JSON.stringify(this.state.problemImages));

        //formData.append("SolutionVariants", this.state.solutionVariants);
        //formData.append("Author", и че);

        await axios.post(APP_API_BASE_URL + PROBLEM_ADD_PAGE_API_CREATE_PROBLEM, formData)
            .catch((error) => {
                console.log(error.response.data);
            })
            .then((response) => {
                if (response.status === 200) {
                    // TODO: redirect to main list
                    //console.log("каво");

                }
            });

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
                solutionVariants={this.state.solutionVariants}
                onPublishClick={this.onPublishClick}
            />
        );
    }

}

export default ProblemAddPageContainer;
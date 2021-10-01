import React, {Component} from "react";
import ProblemAddPageComponent from "../components/ProblemAddPageComponent";
import ProblemAddPageImageListItemComponent from "../components/ProblemAddPageImageListItemComponent";
import ProblemAddPageAddImageListItemComponent from "../components/ProblemAddPageAddImageListItemComponent";

class ProblemAddPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabsValue: 0,

            title: "",
            rawDescription: "",
            tags: [],
            theme: null,

            problemImages: [],
        }

        this.onTitleChange = this.onTabsChange.bind(this);
        this.onRawDescriptionChange = this.onRawDescriptionChange.bind(this);
        this.onTabsChange = this.onTabsChange.bind(this);
        this.onImageFieldChange = this.onImageFieldChange.bind(this);
    }

    makeImageList() {
        const imagesCount = this.state.problemImages.length;

        const images = this.state.problemImages.map(file =>
            (<ProblemAddPageImageListItemComponent image={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
        ));
        if (imagesCount < 3)
            return (<div>
                {images}
                <ProblemAddPageAddImageListItemComponent onImageFieldChange={this.onImageFieldChange}/>
            </div>);
        return (<div>
            {images}
        </div>);
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
        console.log(this.state.problemImages);
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
            />
        );
    }

}

export default ProblemAddPageContainer;
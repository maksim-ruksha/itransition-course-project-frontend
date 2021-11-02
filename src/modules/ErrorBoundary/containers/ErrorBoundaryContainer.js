import React, {Component} from "react";

class ErrorBoundaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error
        })
    }

    render() {
        if (this.state.hasError) {
            console.log(this.state.error);
            return <h1>Something went wrong: {this.state.error}</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaryContainer;
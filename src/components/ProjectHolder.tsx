import { Component } from "react";
import "../styles/ProjectHolder.css";

interface IProps {
    projectName: string;
    projectImage?: string;
}

interface IState {

}

class ProjectHolder extends Component<IProps, IState> {
    render() {
        return (
            <div className="project-holder">
                <h3 className="project-name">{this.props.projectName}</h3>
                <div className="image-holder">
                    <img src={this.props.projectImage} alt="alt" />
                </div>
            </div>
        )
    }
}

export default ProjectHolder;
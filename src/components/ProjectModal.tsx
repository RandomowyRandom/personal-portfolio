import { Component } from "react";
import Project from "../Project";
import "../styles/ProjectModal.css";

interface IProps {
    project: Project;
    onCloseButtonPressed?: () => void;
}

class ProjectModal extends Component<IProps> {
    render() {
        return (
            <div className="project-modal-background">
                <div className="project-modal">
                    <div className="project-header">
                        <h2>{this.props.project.name}</h2>
                    </div>
                    <div className="project-description">
                        <img className="project-icon" src={this.props.project.image} alt="project icon" />
                        <br/>
                        <p>{this.props.project.description}</p>
                        <a href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                            <button>
                                itch.io page
                            </button>
                        </a>
                        <button className="close-button" onClick={this.props.onCloseButtonPressed}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectModal;
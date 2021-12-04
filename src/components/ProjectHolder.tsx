import { Component } from "react";
import { Popup } from "reactjs-popup";
import ProjectModal from "./ProjectModal";
import Project from "../Project";
import "../styles/ProjectHolder.css";

interface IProps {
    project: Project;
}

interface IState {
    isOpen: boolean;
}

class ProjectHolder extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div className="project-holder">
                <h3 className="project-name">{this.props.project.name}</h3>
                <div className="image-holder">
                <img onClick={() => this.setState({isOpen: true})} src={this.props.project.image} alt="project cover"/>
                    <Popup open={this.state.isOpen} modal>
                        <ProjectModal onCloseButtonPressed={() => this.setState({isOpen: false})} project={this.props.project}/>    
                    </Popup> 
                </div>
            </div>
        )
    }
}


export default ProjectHolder;
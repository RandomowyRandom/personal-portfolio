import { Component } from "react";
import '../styles/NavigationElement.css';

interface IProps{
    name: string;
    subpage: JSX.Element;
    onClick: (element: JSX.Element) => void;
}

class NavigationElement extends Component<IProps> {
    render() {
        return(
            <div className="navigation-element">
                <h2 onClick={() => {this.props.onClick(this.props.subpage)}} >{this.props.name}</h2>
            </div>
        )
    }
}

export default NavigationElement;
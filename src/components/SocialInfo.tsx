import { Component } from "react";
import ExternalLinkButton from '../components/ExternalLinkButton';
import "../styles/SocialInfo.css";

interface IProps {
    name: string;
    icon?: string;
    link: string;
    buttonText : string;
}
 
interface IState {
    
}
 
class SocialInfo extends Component<IProps, IState> {
    render() { 
        return (  
            <div>
                <div className="social-info">
                    <img src={this.props.icon} alt="social icon" />
                    <h1 className="social-name">{this.props.name}</h1>
                    <ExternalLinkButton title={this.props.buttonText} link={this.props.link}/>
                </div>
            </div>
        );
    }
}
 
export default SocialInfo;
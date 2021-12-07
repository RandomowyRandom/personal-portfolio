import { Component } from 'react';
import "../styles/ExternalLinkButton.css";

import externalLink from "../externalLink.svg";

interface IProps {
    title: string;
    link: string;
}
 
interface IState {
    
}
 
class ExternalLinkButton extends Component <IProps, IState> {
    render() { 
        return ( 
            <a style={{textDecoration: "none"}} href={this.props.link} target="_blank" rel="noreferrer">
                <button style={{cursor: "pointer", display: "flex", alignItems: "center"}} className="external-button">
                    {this.props.title}
                    <img style={{float:"right" ,margin: "0",marginLeft: "5px", height: "12px"}} src={externalLink} alt="external link icon" />
                </button>
            </a>
         );
    }
}
 
export default ExternalLinkButton;
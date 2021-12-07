import * as React from 'react';
import SocialInfo from '../components/SocialInfo';
import itchIcon from '../itchio.svg';
import githubIcon from '../githubIcon.svg'
import "../styles/ContactAndSocials.css";

interface IProps {
    
}
 
interface IState {
    
}
 
class ContactAndSocials extends React.Component<IProps, IState> {
    state = {}
    render() { 
        return ( 
        <div className="contact-and-socials">
            <SocialInfo buttonText="Go to itch.io" link="https://triangularstudios.itch.io/" name="itch.io" icon={itchIcon}/>
            <SocialInfo buttonText="Go to GitHub" link="https://github.com/RandomowyRandom" name="GitHub" icon={githubIcon}/>
        </div> 
        );
    }
}
 
export default ContactAndSocials;
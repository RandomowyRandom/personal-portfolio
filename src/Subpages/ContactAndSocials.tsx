import * as React from "react";
import SocialInfo from "../components/SocialInfo";
import itchIcon from "../itchio.svg";
import githubIcon from "../githubIcon.svg";
import soundCloundIcon from "../soundcloud.svg";
import twitterIcon from "../twitter.svg";
import emailIcon from "../email.svg";
import "../styles/ContactAndSocials.css";

interface IProps {}

interface IState {}

class ContactAndSocials extends React.Component<IProps, IState> {
  state = {};
  render() {
    return (
      <div className="contact-and-socials">
        <SocialInfo
          buttonText="Go to itch.io"
          link="https://triangularstudios.itch.io/"
          name="itch.io"
          icon={itchIcon}
        />
        <SocialInfo
          buttonText="Go to GitHub"
          link="https://github.com/RandomowyRandom"
          name="GitHub"
          icon={githubIcon}
        />
        <SocialInfo
          buttonText="Go to Soundcloud"
          link="https://soundcloud.com/user-50479978"
          name=""
          icon={soundCloundIcon}
        ></SocialInfo>
        <SocialInfo
          buttonText="Go to Twitter"
          link="https://twitter.com/RedrayDev"
          name="Twitter"
          icon={twitterIcon}
        ></SocialInfo>
        <SocialInfo
          buttonText="Send a mail"
          link="mailto:randomowyrandom21@gmail.com"
          name="E-mail"
          icon={emailIcon}
        ></SocialInfo>
      </div>
    );
  }
}

export default ContactAndSocials;

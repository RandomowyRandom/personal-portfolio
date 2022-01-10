import { Component } from "react";
import NavigationElement from "./NavigationElement";
import Projects from "../Subpages/Projects";
import ContactAndSocials from "../Subpages/ContactAndSocials";
import MainPage from "../Subpages/MainPage";
import "../styles/NavigationBar.css";

interface IProps {
  onSubpageChange: (element: JSX.Element) => void;
}

interface IState {}

class NavigationBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="nav-bars">
          <NavigationElement
            onClick={(page) => this.props.onSubpageChange(page)}
            subpage={<MainPage />}
            name="Home"
          ></NavigationElement>
          <NavigationElement
            onClick={(page) => this.props.onSubpageChange(page)}
            subpage={<Projects />}
            name="My work"
          />
          <NavigationElement
            onClick={(page) => this.props.onSubpageChange(page)}
            subpage={<ContactAndSocials />}
            name="Contact and socials"
          />
        </div>
        <hr
          style={{
            color: "#1d1d1d",
            backgroundColor: "#1d1d1d",
            width: "50%",
            height: "2px",
            marginTop: "50px",
          }}
        />
      </div>
    );
  }
}

export default NavigationBar;

import { Component } from "react";
import AboutMeQuestion from "../components/AboutMeQuestion";
import "../styles/MainPage.css";
import gif1 from "../Screenshots/GIF_1.gif";
import gif2 from "../Screenshots/GIF_2.gif";
import gif3 from "../Screenshots/GIF_3.gif";
import screenshot1 from "../Screenshots/Screenshot_1.png";
import screenshot2 from "../Screenshots/Screenshot_2.png";

interface IProps {}

interface IState {}

class MainPage extends Component<IProps, IState> {
  line: JSX.Element = (
    <hr
      style={{
        color: "#1d1d1d",
        backgroundColor: "#1d1d1d",
        width: "30%",
        height: "2px",
        marginTop: "50px",
      }}
    />
  );

  render() {
    return (
      <div className="main-page">
        <div className="welcome">
          <h1 className="welcome-text">Welcome traveller!</h1>
          <h2 className="welcome-subtext">Take a quick look around!</h2>
          {this.line}
        </div>

        <div className="main-content">
          <div className="about-me">
            <h1>About me</h1>
            {this.line}
            <AboutMeQuestion
              question="Who Am I?"
              answer="My name is Dominik and I am a 17 years old student passionate
                about game developement and coding in general."
            ></AboutMeQuestion>

            {this.line}

            <AboutMeQuestion
              question="What have I been working on?"
              answer="So far I've been working mostly on gamejam projects and have
                been learning new things. My game engine of choice is Unity, but
                I've also tried Godot!"
            ></AboutMeQuestion>

            {this.line}

            <AboutMeQuestion
              question="Am I working on something right now?"
              answer='Currently I am working on a bigger project which is a funny
                multiplayer game with working name "Frienship Exterminator".'
            ></AboutMeQuestion>

            {this.line}

            <AboutMeQuestion
              question="What technologies do I use?"
              answer="I use C#, Unity and Godot for my games and React with Typescript
                for web development."
            ></AboutMeQuestion>

            {this.line}

            <AboutMeQuestion
              question="Any other questions?"
              answer="Feel free to contact me by mail, discord or anywhere you can
                find me. I'm always happy to answer questions! You should also
                look at the rest of the site, it's pretty cool and you might
                find answers there!"
            ></AboutMeQuestion>
          </div>
          <div className="highlights">
            <h1>Highlighted project</h1>
            {this.line}
            <h2>Friendship Exterminator</h2>
            <p>
              <b>Friendship Exterminator</b> is an upcoming multiplayer rage
              game with procedurally generated map, where your goal is to reach
              the top of the dungeon while befriending or betraying as many of
              your friends as you can.
            </p>
            {this.line}
            <img src={gif1} alt="game gif" />
            <img src={gif2} alt="game gif" />
            <img src={gif3} alt="game gif" />
            <img src={screenshot1} alt="game screenshot" />
            <img src={screenshot2} alt="game screenshot" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

import { Component } from 'react';
import BigTitle from './components/BigTitle';
import ProjectHolder from './components/ProjectHolder';
import './App.css';

// image imports that needs to be refactored
import cleanTheSea from './ProjectIcons/cleanTheSea.png';
import cycleOfLife from './ProjectIcons/cycleOfLife.png';
import doNotOveruse from './ProjectIcons/doNotOveruse.png';
import radBlasters from './ProjectIcons/radBlasters.png';
import reKnight from './ProjectIcons/reKnight.png';
import solarpunkEngeneer from './ProjectIcons/solarpunkEngeneer.png';
import spookyDefense from './ProjectIcons/spookyDefense.png';
import sweetAdventuers from './ProjectIcons/sweetAdventures.png';
import Project from './Project';

class App extends Component {

 //#region Projects

  cleanTheSea : Project = new Project("Clean the sea, but not for free", "d", cleanTheSea , "https://triangularstudios.itch.io/clean-the-sea-but-not-for-free");

  cycleOfLife : Project = new Project("Cycle of life", "d", cycleOfLife , "https://triangularstudios.itch.io/the-cycle-of-life");

  doNotOveruse : Project = new Project("Do not overuse", "d", doNotOveruse , "https://triangularstudios.itch.io/do-not-overuse");

  radBlasters : Project = new Project("Rad blasters", "d", radBlasters , "https://triangularstudios.itch.io/rad-blasters");

  reKnight : Project = new Project("ReKnight", "d", reKnight , "https://triangularstudios.itch.io/re-knight");

  solarPunkEngineer : Project = new Project("Solarpunk Engineer", "d", solarpunkEngeneer , "https://triangularstudios.itch.io/solarpunk-engineer");

  spookyDefense : Project = new Project("SpookyDefense", "d", spookyDefense , "https://triangularstudios.itch.io/spooky-defense");

  sweetAdventures : Project = new Project("Sweet Adventure: Plains & Forest", "d", sweetAdventuers , "https://triangularstudios.itch.io/sweet-adventure-plains-forest");

  //#endregion

  render() {
    return(
      <div>
        <div>
          <BigTitle title="Dominik Konik" subTitle={["Game developer", "Web developer", "Pixel artist", "Professional dumbass"]}></BigTitle>
        </div>
        <div className="projects-holder">
          <ProjectHolder project={this.cleanTheSea}></ProjectHolder>
          <ProjectHolder project={this.spookyDefense}></ProjectHolder>
          <ProjectHolder project={this.solarPunkEngineer}></ProjectHolder>
          <ProjectHolder project={this.sweetAdventures}></ProjectHolder>
          <ProjectHolder project={this.doNotOveruse}></ProjectHolder>
          <ProjectHolder project={this.cycleOfLife}></ProjectHolder>
          <ProjectHolder project={this.reKnight}></ProjectHolder>
          <ProjectHolder project={this.radBlasters}></ProjectHolder>
        </div>
      </div>

    )
  }
}

export default App;
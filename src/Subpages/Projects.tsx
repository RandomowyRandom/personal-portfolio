import { Component } from 'react';
import ProjectHolder from '../components/ProjectHolder';
import ISubpage from "./ISubpage";
import '../styles/Projects.css';

// image imports that needs to be refactored
import cleanTheSea from '../ProjectIcons/cleanTheSea.png';
import cycleOfLife from '../ProjectIcons/cycleOfLife.png';
import doNotOveruse from '../ProjectIcons/doNotOveruse.png';
import radBlasters from '../ProjectIcons/radBlasters.png';
import reKnight from '../ProjectIcons/reKnight.png';
import solarpunkEngeneer from '../ProjectIcons/solarpunkEngeneer.png';
import spookyDefense from '../ProjectIcons/spookyDefense.png';
import sweetAdventuers from '../ProjectIcons/sweetAdventures.png';
import Project from '../Project';

class Projects extends Component implements ISubpage{
    name: string = "Projects";

    //#region Projects

    cleanTheSea : Project = new Project("Clean the sea, but not for free", "2D game made in about 12 days for SeaJam. It is about a sea diver cleaning trash from ocean.", cleanTheSea , "https://triangularstudios.itch.io/clean-the-sea-but-not-for-free");

    cycleOfLife : Project = new Project("The Cycle of life", "2D platformer made for the first Secret Santa Jam.", cycleOfLife , "https://triangularstudios.itch.io/the-cycle-of-life");

    doNotOveruse : Project = new Project("Do not overuse", "2D roguelike game made in 7 days for Bullet hell Jam 2021. It was mainly an experiment to make a procedural dungeon generation.", doNotOveruse , "https://triangularstudios.itch.io/do-not-overuse");

    radBlasters : Project = new Project("Rad blasters", "2D top down game made in 2 days for Mini Jam 58 with the theme Neon.", radBlasters , "https://triangularstudios.itch.io/rad-blasters");

    reKnight : Project = new Project("Re: Knight", "2D platformer, a submission for PB Game Jam 5. Themes were Redo and Out of reach.", reKnight , "https://triangularstudios.itch.io/re-knight");

    solarPunkEngineer : Project = new Project("Solarpunk Engineer", "2D tycoon game made in Godot engine for Godot wild jam #38 with the theme of Solarpunk.", solarpunkEngeneer , "https://triangularstudios.itch.io/solarpunk-engineer");

    spookyDefense : Project = new Project("Spooky Defense", "2D game made in 7 days for Spooktober Jam 2021. The theme was Sacrifice.", spookyDefense , "https://triangularstudios.itch.io/spooky-defense");

    sweetAdventures : Project = new Project("Sweet Adventure: Plains & Forest", "2D 32x32 tile palette with the overall theme of forest.", sweetAdventuers , "https://triangularstudios.itch.io/sweet-adventure-plains-forest");

    //#endregion

    render() {
        return (
        <div>
            <div className="projects">
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

export default Projects;
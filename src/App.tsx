import { Component } from 'react';
import BigTitle from './components/BigTitle';
import ProjectHolder from './components/ProjectHolder';
import nicocado from './nicocado.bmp';
import jojo from './my-image.png';
import absolut from './absolut.bmp';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <BigTitle title="Dominik Konik" subTitle={["Game developer", "Web developer", "Pixel artist", "Professional dumbass"]}></BigTitle>
        </div>
        <div>
          <ProjectHolder projectName="Projekt 1" projectImage={nicocado}></ProjectHolder>
          <ProjectHolder projectName="Projekt 2" projectImage={jojo}></ProjectHolder>
          <ProjectHolder projectName="Projekt 3" projectImage={absolut}></ProjectHolder>
        </div>
      </div>

    )
  }
}

export default App;
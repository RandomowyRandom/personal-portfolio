import { Component } from 'react';
import BigTitle from './components/BigTitle';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Projects from './Subpages/Projects';

interface IProps{

}

interface IState{
  currentPage: JSX.Element;
}

class App extends Component<IProps, IState> {

  constructor(props: IProps){
    super(props);
    this.state = {currentPage: <Projects/>};
  }

  render() {
    return(
      <div>
        <div>
          <BigTitle title="Dominik Konik" subTitle={["Game developer", "Web developer", "Pixel artist", "Professional dumbass"]}></BigTitle>
        </div>
        <NavigationBar onSubpageChange={(page) => this.setState({currentPage: page})}/>
        {this.state.currentPage}
      </div>

    )
  }
}

export default App;
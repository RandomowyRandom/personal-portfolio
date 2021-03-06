import { Component } from "react";
import BigTitle from "./components/BigTitle";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import MainPage from "./Subpages/MainPage";

interface IProps {}

interface IState {
  currentPage: JSX.Element;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    document.title = "Dominik Konik - Portfolio";

    super(props);
    this.state = { currentPage: <MainPage /> };
  }

  render() {
    return (
      <div>
        <div>
          <BigTitle
            title="Dominik Konik"
            subTitle={[
              "Game developer",
              "Web developer",
              "Pixel artist",
              "Professional dumbass",
            ]}
          ></BigTitle>
        </div>
        <NavigationBar
          onSubpageChange={(page) => this.setState({ currentPage: page })}
        />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;

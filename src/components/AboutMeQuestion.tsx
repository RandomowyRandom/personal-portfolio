import { Component } from "react";
import "../styles/AboutMeQuestion.css";

interface IProps {
  question: string;
  answer: string;
}

interface IState {
  showAnswer: boolean;
}

class AboutMeQuestion extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      showAnswer: false,
    };
  }

  render() {
    return (
      <div>
        <h2
          onClick={() => this.setState({ showAnswer: !this.state.showAnswer })}
        >
          {this.props.question}
        </h2>
        <p>{this.state.showAnswer ? this.props.answer : ""}</p>
      </div>
    );
  }
}

export default AboutMeQuestion;

import { Component } from 'react';
import TextLoop from 'react-text-loop';
import "../styles/BigTitle.css";

interface IProps {
    title: string;
    subTitle : Array<string>;
}

interface IState {

}

class BigTitle extends Component<IProps, IState> {
    render() {
      return(
        <div className="big-title">
          <h1>{this.props.title}</h1>
          <h3>
              <TextLoop children={this.props.subTitle} interval={2000} springConfig={{stiffness:250, damping:20}}/>
          </h3>
        </div>
      )
    }
  }
  
  export default BigTitle;
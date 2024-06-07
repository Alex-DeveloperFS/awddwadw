import React, {Component} from 'react';
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.text = {
      count: 'Count',
      buttonCounter: 'Click me',
      buttonReset: 'Reset'
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.className = {
      container: 'container',
      title: 'title',
      counter: 'counter',
      btnBox: 'btn-box',
      button: 'button'
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  }

  handleReset = () => {
    this.setState(prevState => ({count: prevState.count = 0}));
  }

  render() {
    return (
      <div className={this.className.container}>
        <h1 className={this.className.title}>Stateful-Class</h1>
        <Counter className={this.className.counter} text={this.text.count + ': ' + this.state.count}/>
        <div className={this.className.btnBox}>
          <Button className={this.className.button} onClick={this.handleIncrement} text={this.text.buttonCounter}/>
          <Button className={this.className.button} onClick={this.handleReset} text={this.text.buttonReset}/>
        </div>
      </div>
    );
  }
}

export default App;
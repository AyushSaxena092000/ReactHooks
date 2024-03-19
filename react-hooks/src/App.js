import React, { Component } from "react";
import Counter from "./components/Counter/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: When component render first time");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
       <Counter number={this.state.count}>
        
       </Counter>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;

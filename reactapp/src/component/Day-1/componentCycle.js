import logo from "C:/Users/lenovo/Desktop/React-App/reactapp/src/logo.svg";
import "C:/Users/lenovo/Desktop/React-App/reactapp/src/App.css";
import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      newName: "dfg",
      num: 21,
    };
    console.log("Constructor function is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps() called");
    return true;
  }

  componetDidMount() {
    console.log("ComponentDidMount() called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponetUpdate() called");
    console.log("Next state: " + nextState.num);
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("getSnapshotBeforeUpdate() called");
    console.log("Previous State: " + prevState.num);
    return 0;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount() called");
  }
  changeState = () => {
    this.setState({
      num: this.state.num + 2,
    });
  };

  render() {
    console.log("re-render");
    return (
      <div className="App">
        <header className="App-header">
        <h2>React App</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">Learn React{" "}</a>
          <span style={{ color: "white" }}> {this.state.num} </span>{" "}
          <button onClick={this.changeState}> Click here! </button>
        </header>
      </div>
    );
  }
}

export default LifeCycle;

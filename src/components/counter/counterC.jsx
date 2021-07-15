import React from "react";

class counterC extends React.Component {
    constructor(props) { //constructor method is used so we can create new objects based on this schema
      super(props); //with super we pass counterC props back to the main object that it extends(react component)
      this.state = { //.this - is the CounterC class object, here we add a new state to our object's props
        count: 0
      };
    }
  
    
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default counterC;
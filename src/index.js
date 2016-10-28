import React from "react";
import {render} from "react-dom";

// Component Lib Imports
import Button from "./components/button/button.js";


class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React!</p>
       <Button label="Yolo" />
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));

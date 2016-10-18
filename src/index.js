import React from "react";
import {render} from "react-dom";

// Component Lib Imports
import TS_Button from "./components/button/button.jsx";


class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React!</p>
       <TS_Button></TS_Button>
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));

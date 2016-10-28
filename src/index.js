import React from "react";
import {render} from "react-dom";

// Component Lib Imports
import Button from "./components/button/button.js";


class App extends React.Component {
  render() {
    return (
      <div>
      <p>Local Workspace</p>
       <Button label="Default" />
       <Button label="Primary" tsStyle="primary" />
       <Button label="Success" tsStyle="success" />
       <Button label="Danger" tsStyle="danger" />
      </div>
    );
  }
}

render(<App/>, document.getElementById("app"));

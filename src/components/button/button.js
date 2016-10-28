import React from "react";
import {render} from "react-dom";

// Component Styles
import "./button.scss";

/**
* This is the simple button component.
*
*/
export default class Button extends React.Component {
  render() {
    return <button className="ts-btn">{this.props.label}</button>;
  }
}


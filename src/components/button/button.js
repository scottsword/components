import React from "react";
import {render} from "react-dom";

// Component Styles
import "./button.scss";

/**
* This is the simple button component.
*
*/
export default class Button extends React.Component {

  constructor(props) {
    super(props);
    const themes = {
      default: "",
      primary: "ts-btn--pri",
      success: "ts-btn--success",
      danger: "ts-btn--danger"
    };

    // If a theme type if passed use it, if something else is passed just add it like a class
    if (themes[this.props.tsStyle]) {
      this.button_styles = "ts-btn " + themes[this.props.tsStyle];
    }
    else if (this.props.tsStyle) {
      this.button_styles = "ts-btn " + this.props.tsStyle;
    }

  }

  render() {
    return <button className={this.button_styles}>{this.props.label}</button>;
  }
}

Button.propTypes = {
  /**
   * Button label.
   */
  label: React.PropTypes.string,
  /**
   * Can be default, primary, success or danger. Can also pass in custom css classes.
   */
  tsStyle: React.PropTypes.string
};

Button.defaultProps = {
  label: "Button",
  tsStyle: "ts-btn"
};


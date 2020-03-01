/* * */
/* IMPORTS */
import React from "react";
import settings from "../../settings/general";

/* * */
/* * * * */
export default class BadgeInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.setFocusAgain();
    // setInterval(() => this.setFocusAgain(), settings["input-focus-delay"]);
  }

  setFocusAgain() {
    setTimeout(() => {
      this.textInput.current.focus();
      this.textInput.current.select();
      this.textInput.current.setSelectionRange(0, 9999);
    }, settings["input-focus-delay"]);
  }

  render() {
    return (
      <input
        className="badgeInput animate my-4 mx-3"
        name="search"
        type="text"
        ref={this.textInput}
        placeholder="clique para ler o badge"
        value={this.props.value}
        onChange={event => {
          this.props.onChange(event);
          this.setFocusAgain();
        }}
        onBlur={() => this.setFocusAgain()}
        autoComplete="off"
      />
    );
  }
}

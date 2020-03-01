/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
class BadgeInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    // this.setFocusAgain();
    setInterval(this.setFocusAgain, 1000);
  }

  componentDidUpdate() {
    this.setFocusAgain();
  }

  setFocusAgain() {
    setTimeout(() => {
      this.textInput.current.focus();
      this.textInput.current.select();
      this.textInput.current.setSelectionRange(0, 9999);
    }, 700);
  }

  render() {
    return (
      <input
        className="badgeInput animate my-4 mx-3"
        name="search"
        type="text"
        ref={this.textInput}
        placeholder="your badge please"
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

/* * */
export default BadgeInput;

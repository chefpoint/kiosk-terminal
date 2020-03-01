/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
export default class ProductCard extends React.Component {
  state = {
    selected: false
  };

  render() {
    return (
      <div
        className={
          "display-card text-center depth animate cursor-pointer p-3 my-3" +
          (this.state.selected ? " productIsSelected" : "")
        }
        onClick={() => {
          this.state.selected
            ? this.props.onUnselect(this.props.product)
            : this.props.onSelect(this.props.product);
          this.setState({ selected: !this.state.selected });
        }}
      >
        <h1 style={{ fontSize: 100 }}>{this.props.product.icon}</h1>
        <h4 className="my-4">{this.props.product.title}</h4>
      </div>
    );
  }
}

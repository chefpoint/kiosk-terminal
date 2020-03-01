/* * */
/* IMPORTS */
import React from "react";

import _ from "lodash";
import moment from "moment";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../../components/Header";
import BadgeInput from "./BadgeInput";
import ProductCard from "./ProductCard";
import CheckoutButton from "./CheckoutButton";
import StatusOverlay from "./StatusOverlay";

import spreadsheets from "../../services/spreadsheets";

import settings from "../../settings/general";
import products from "../../settings/products";

/* * */
/* * * * */
export default class Home extends React.Component {
  state = {
    badgeID: "",
    cart: [],
    loading: false,
    success: false,
    error: null
  };

  addProductToCart(product) {
    let cart = this.state.cart;
    this.setState({ cart: _.concat(cart, product) });
  }

  removeProductFromCart(product) {
    let cart = this.state.cart;
    this.setState({ cart: _.pull(cart, product) });
  }

  checkIfCartHasProduct(cart, productID) {
    for (const item of cart)
      if (Object.values(item).includes(productID)) return true;
    return false;
  }

  async confirmPurchase() {
    // Show the loading screen
    this.setState({ loading: !this.state.loading });
    try {
      // try pushing the transaction to Google Sheets
      await spreadsheets.addNewRow({
        // The shop location
        Location: this.props.match.params.location,
        // The transaction date formated so GSheets understands
        Date: moment().format("[=DATE(]YYYY[,]MM[,]DD[)]"),
        // The transaction time formated so GSheets understands
        Time: moment().format("[=TIME(]HH[,]mm[,0)]"),
        // The customer TP Badge ID
        BadgeID: this.state.badgeID.toString(),
        // If cart has the product, then add 1, else add 0
        Soup: this.checkIfCartHasProduct(this.state.cart, "soup") ? 1 : 0,
        Salad: this.checkIfCartHasProduct(this.state.cart, "salad") ? 1 : 0,
        Bread: this.checkIfCartHasProduct(this.state.cart, "bread") ? 1 : 0,
        Fruit: this.checkIfCartHasProduct(this.state.cart, "fruit") ? 1 : 0
      });

      // If successful then show success message
      this.setState({ loading: !this.state.loading, success: true });
      setTimeout(() => {
        // and reload the window after x miliseconds
        window.location = "/" + this.props.match.params.location;
      }, settings["success-reload-delay"]);
    } catch (err) {
      // If an error occurs then display an error message
      this.setState({ loading: !this.state.loading, error: err.message });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <Row>
            <BadgeInput
              value={this.state.search}
              onChange={event => this.setState({ badgeID: event.target.value })}
            />
          </Row>
          <Row>
            {products.map(p => {
              return (
                <Col key={p.id}>
                  <ProductCard
                    product={p}
                    onSelect={product => this.addProductToCart(product)}
                    onUnselect={product => this.removeProductFromCart(product)}
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <CheckoutButton
              enabled={this.state.cart.length && this.state.badgeID.length}
              onClick={() => this.confirmPurchase()}
            />
          </Row>
        </Container>
        <StatusOverlay
          loading={this.state.loading}
          success={this.state.success}
          error={this.state.error}
          location={this.props.match.params.location}
        />
      </React.Fragment>
    );
  }
}

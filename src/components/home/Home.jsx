/* * */
/* IMPORTS */
import React from "react";

import _ from "lodash";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import products from "./products.json";

import Header from "./Header";
import ProductCard from "./ProductCard";
import BadgeInput from "./BadgeInput";
import ConfirmButton from "./ConfirmButton";
import StatusOverlay from "./StatusOverlay.jsx";

/* * */
/* * * * */
class Home extends React.Component {
  state = {
    badgeID: "",
    cart: [],
    loading: false,
    success: false,
    error: false
  };

  addProductToCart(product) {
    let cart = this.state.cart;
    this.setState({ cart: _.concat(cart, product) });
  }

  removeProductFromCart(product) {
    let cart = this.state.cart;
    this.setState({ cart: _.pull(cart, product) });
  }

  confirmPurchase() {
    this.setState({ loading: !this.state.loading });
    setTimeout(() => {
      this.setState({ loading: !this.state.loading });
      this.setState({ success: true });
      setTimeout(() => {
        window.location = "/" + this.props.match.params.location;
      }, 1000);
    }, 1000);
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
            <ConfirmButton
              enabled={this.state.cart.length && this.state.badgeID.length}
              onClick={() => this.confirmPurchase()}
            />
          </Row>
        </Container>
        <StatusOverlay
          loading={this.state.loading}
          success={this.state.success}
          error={this.state.error}
        />
      </React.Fragment>
    );
  }
}

/* * */
export default Home;

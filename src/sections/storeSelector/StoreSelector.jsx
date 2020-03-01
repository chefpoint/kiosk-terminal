/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../../components/Header";

import locations from "../../settings/locations";

/* * */
/* * * * */
export default class StoreSelector extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <h1 className="text-center my-5">Select a store</h1>
        <Row>
          {locations.map(l => {
            return (
              <Col key={l.id}>
                <div
                  className="display-card text-center sh-light animate grow cursor-pointer p-3 my-3"
                  onClick={() => (window.location = "/" + l.id)}
                >
                  <h1 style={{ fontSize: 100 }}>{l.icon}</h1>
                  <h4 className="my-4">{l.title}</h4>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

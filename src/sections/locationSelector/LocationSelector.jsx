/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../../components/Header";

import settings from "../../settings/general";
import locations from "../../settings/locations";

/* * */
/* * * * */
export default function LocationSelector() {
  return (
    <Container>
      <Header />
      <h1 className="text-center my-5">Selecione a sua loja</h1>
      <Row>
        {locations.map(l => {
          return (
            <Col key={l.id}>
              <div
                className="display-card text-center depth animate cursor-pointer p-3 my-3"
                onClick={() => (window.location = "/" + l.id)}
              >
                <h1 style={{ fontSize: 100 }}>{l.icon}</h1>
                <h4 className="my-4">{l.title}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
      <p className="text-secondary text-center mt-5">
        <small>{settings.version}</small>
      </p>
    </Container>
  );
}

/* * */
/* IMPORTS */
import React from "react";

/* * */
/* * * * */
export default function CheckoutButton({ enabled, onClick }) {
  return (
    <div
      className={
        "display-card text-center animate p-5 m-3 w-100" +
        (enabled ? " depth cursor-pointer confirmButton" : " disabled")
      }
      onClick={() => enabled && onClick()}
    >
      <h1 style={{ fontSize: 30 }}>Confirmar</h1>
    </div>
  );
}
